import 'dotenv/config';
import express from 'express';
import type { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

type FormType = 'demo_request' | 'contact' | 'waitlist' | 'newsletter';

interface SubmissionPayload {
  formType?: unknown;
  productName?: unknown;
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  company?: unknown;
  subject?: unknown;
  message?: unknown;
  sourceUrl?: unknown;
}

const VALID_FORM_TYPES: ReadonlySet<string> = new Set([
  'demo_request',
  'contact',
  'waitlist',
  'newsletter',
]);

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 15;
const ipRequestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (ipRequestLog.get(ip) || []).filter(
    (ts) => now - ts < RATE_LIMIT_WINDOW_MS
  );
  if (timestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    ipRequestLog.set(ip, timestamps);
    return true;
  }
  timestamps.push(now);
  ipRequestLog.set(ip, timestamps);
  return false;
}

function asCleanString(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLength);
}

function stripHeaderNewlines(value: string): string {
  return value.replace(/[\r\n]+/g, ' ').trim();
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 160;
}

function getFormLabel(formType: FormType): string {
  switch (formType) {
    case 'demo_request':
      return 'Request a Demo';
    case 'contact':
      return 'Contact Inquiry';
    case 'waitlist':
      return 'Webinar Waitlist';
    case 'newsletter':
      return 'Newsletter Subscription';
  }
}

function buildEmailContent(data: {
  formType: FormType;
  productName: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  sourceUrl: string;
  submittedAt: string;
}): { emailSubject: string; text: string; html: string } {
  const label = getFormLabel(data.formType);

  let rawSubject = `[VeniHost] New ${label}`;
  if (data.productName) {
    rawSubject = `[VeniHost Demo Request] ${data.productName} — ${data.name || data.email}`;
  } else if (data.subject) {
    rawSubject = `[VeniHost ${label}] ${data.subject}`;
  } else if (data.name) {
    rawSubject = `[VeniHost ${label}] ${data.name}`;
  }

  const emailSubject = stripHeaderNewlines(rawSubject).slice(0, 180);

  const rows: Array<{ label: string; value: string }> = [
    { label: 'Submission Type', value: label },
    ...(data.productName ? [{ label: 'Product / Solution', value: data.productName }] : []),
    ...(data.name ? [{ label: 'Full Name', value: data.name }] : []),
    { label: 'Email Address', value: data.email },
    ...(data.phone ? [{ label: 'Phone Number', value: data.phone }] : []),
    ...(data.company ? [{ label: 'Company', value: data.company }] : []),
    ...(data.subject ? [{ label: 'Subject', value: data.subject }] : []),
    ...(data.message ? [{ label: 'Details / Message', value: data.message }] : []),
    ...(data.sourceUrl ? [{ label: 'Page URL', value: data.sourceUrl }] : []),
    { label: 'Submitted At (UTC)', value: data.submittedAt },
  ];

  const text = [
    `New ${label} Notification`,
    '========================================',
    ...rows.map((r) => `${r.label}: ${r.value}`),
  ].join('\n');

  const htmlRows = rows
    .map(
      (r) => `
      <tr>
        <td style="padding:10px 14px;border-bottom:1px solid #e2e8f0;font-weight:600;color:#0f172a;width:180px;vertical-align:top;font-size:14px;">
          ${escapeHtml(r.label)}
        </td>
        <td style="padding:10px 14px;border-bottom:1px solid #e2e8f0;color:#334155;font-size:14px;white-space:pre-wrap;">
          ${escapeHtml(r.value)}
        </td>
      </tr>`
    )
    .join('');

  const html = `
  <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;background:#f8fafc;padding:24px;color:#0f172a;">
    <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
      <div style="background:#0f172a;padding:20px 24px;border-bottom:3px solid #f97316;">
        <div style="font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#fb923c;margin-bottom:4px;">
          VeniHost Admin Notification
        </div>
        <h1 style="margin:0;font-size:20px;font-weight:700;color:#ffffff;">
          New ${escapeHtml(label)}
        </h1>
      </div>
      <div style="padding:20px 24px;">
        <table style="width:100%;border-collapse:collapse;">
          ${htmlRows}
        </table>
      </div>
      <div style="background:#f8fafc;padding:14px 24px;border-top:1px solid #e2e8f0;font-size:12px;color:#64748b;">
        Sent from your VeniHost website SMTP notification service. Reply directly to respond to ${escapeHtml(data.email)}.
      </div>
    </div>
  </div>`;

  return { emailSubject, text, html };
}

async function startServer() {
  const app = express();
  const port = Number(process.env.PORT) || 3000;

  app.set('trust proxy', 1);
  app.use(express.json({ limit: '100kb' }));

  app.post('/api/submit-form', async (req: Request, res: Response) => {
    const clientIp = req.ip || req.socket.remoteAddress || 'unknown';
    if (isRateLimited(clientIp)) {
      res.status(429).json({
        ok: false,
        error: 'Too many requests. Please wait a few minutes before submitting again.',
      });
      return;
    }

    const body = (req.body || {}) as SubmissionPayload;
    const rawFormType = asCleanString(body.formType, 32) || 'demo_request';

    if (!VALID_FORM_TYPES.has(rawFormType)) {
      res.status(400).json({ ok: false, error: 'Invalid form submission type.' });
      return;
    }

    const formType = rawFormType as FormType;
    const name = asCleanString(body.name, 120);
    const email = asCleanString(body.email, 160);
    const phone = asCleanString(body.phone, 40);
    const company = asCleanString(body.company, 160);
    const productName = asCleanString(body.productName, 160);
    const subject = asCleanString(body.subject, 200);
    const message = asCleanString(body.message, 4000);
    const sourceUrl = asCleanString(body.sourceUrl, 300);

    if (!isValidEmail(email)) {
      res.status(400).json({ ok: false, error: 'Please provide a valid email address.' });
      return;
    }

    if (formType !== 'newsletter' && !name) {
      res.status(400).json({ ok: false, error: 'Please provide your full name.' });
      return;
    }

    if (formType === 'demo_request' && (!phone || !message)) {
      res.status(400).json({
        ok: false,
        error: 'Please fill in your phone number and demo requirements.',
      });
      return;
    }

    if (formType === 'contact' && (!subject || !message)) {
      res.status(400).json({
        ok: false,
        error: 'Please enter a subject and message.',
      });
      return;
    }

    const smtpHost = (process.env.SMTP_HOST || '').trim();
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const smtpSecureEnv = (process.env.SMTP_SECURE || '').trim().toLowerCase();
    const smtpSecure =
      smtpSecureEnv === 'true' ? true : smtpSecureEnv === 'false' ? false : smtpPort === 465;
    const smtpUser = (process.env.SMTP_USER || '').trim();
    const smtpPass = process.env.SMTP_PASS || '';
    const smtpFrom = (process.env.SMTP_FROM || smtpUser).trim();
    const adminEmail = (process.env.ADMIN_EMAIL || 'hello@venihost.com.ng').trim();

    if (!smtpHost || !smtpUser || !smtpPass) {
      res.status(503).json({
        ok: false,
        error:
          'SMTP email delivery is not configured yet. Please set SMTP_HOST, SMTP_USER, and SMTP_PASS in your environment secrets.',
      });
      return;
    }

    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const submittedAt = new Date().toISOString();
      const { emailSubject, text, html } = buildEmailContent({
        formType,
        productName,
        name,
        email,
        phone,
        company,
        subject,
        message,
        sourceUrl,
        submittedAt,
      });

      const safeReplyTo = stripHeaderNewlines(
        name ? `"${name.replace(/"/g, '')}" <${email}>` : email
      );

      await transporter.sendMail({
        from: stripHeaderNewlines(
          smtpFrom.includes('<') ? smtpFrom : `"VeniHost Website" <${smtpFrom}>`
        ),
        to: stripHeaderNewlines(adminEmail),
        replyTo: safeReplyTo,
        subject: emailSubject,
        text,
        html,
      });

      res.status(200).json({
        ok: true,
        message: 'Your request has been submitted and our team has been notified.',
      });
    } catch (err) {
      const safeMsg = err instanceof Error ? err.message : 'Unknown SMTP error';
      console.error('SMTP notification error:', safeMsg);
      res.status(502).json({
        ok: false,
        error: 'Failed to send email notification via SMTP. Please try again shortly.',
      });
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`VeniHost server running on http://0.0.0.0:${port}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
