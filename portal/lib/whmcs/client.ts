/**
 * Venihost WHMCS API Client
 * SERVER-SIDE ONLY — never import this from client components.
 *
 * All requests are signed with WHMCS API identifier + secret.
 * Includes retry logic, structured error handling, and full TypeScript types.
 */

export class WHMCSError extends Error {
  constructor(
    public readonly result: string,
    public readonly message: string,
    public readonly statusCode?: number
  ) {
    super(message);
    this.name = "WHMCSError";
  }
}

interface WHMCSResponse<T = Record<string, unknown>> {
  result: "success" | "error";
  message?: string;
  totalresults?: number;
  startnumber?: number;
  numreturned?: number;
  [key: string]: unknown;
}

async function callWHMCS<T = Record<string, unknown>>(
  action: string,
  params: Record<string, string | number | boolean> = {},
  retries = 3
): Promise<T> {
  const apiUrl = process.env.WHMCS_API_URL!;
  const identifier = process.env.WHMCS_API_IDENTIFIER!;
  const secret = process.env.WHMCS_API_SECRET!;

  if (!apiUrl || !identifier || !secret) {
    throw new WHMCSError(
      "config_error",
      "WHMCS API credentials are not configured"
    );
  }

  const body = new URLSearchParams({
    identifier,
    secret,
    action,
    responsetype: "json",
    ...Object.fromEntries(
      Object.entries(params).map(([k, v]) => [k, String(v)])
    ),
  });

  let lastError: Error = new Error("Unknown error");

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { 
          "Content-Type": "application/x-www-form-urlencoded",
          "User-Agent": "Venihost-Portal/1.0"
        },
        body: body.toString(),
        cache: "no-store",
      });

      if (!res.ok) {
        throw new WHMCSError(
          "http_error",
          `WHMCS HTTP ${res.status}: ${res.statusText}`,
          res.status
        );
      }

      const data = (await res.json()) as WHMCSResponse<T>;

      if (data.result === "error") {
        throw new WHMCSError("api_error", data.message ?? "WHMCS API error");
      }

      return data as T;
    } catch (err) {
      lastError = err as Error;
      if (err instanceof WHMCSError && err.result === "api_error") {
        // API errors are not retryable
        throw err;
      }
      if (attempt < retries) {
        await new Promise((r) => setTimeout(r, attempt * 500));
      }
    }
  }

  throw lastError;
}

export default callWHMCS;
