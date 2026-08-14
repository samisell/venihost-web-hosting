/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PRICE_COM?: string;
  readonly VITE_PRICE_NET?: string;
  readonly VITE_PRICE_ORG?: string;
  readonly VITE_PRICE_NG?: string;
  readonly VITE_PRICE_COM_NG?: string;
  readonly VITE_PRICE_BIZ?: string;
  readonly VITE_PRICE_INFO?: string;
  readonly VITE_PRICE_ME?: string;
  readonly NEXT_PUBLIC_FACEBOOK_PIXEL_ID?: string;
  readonly NEXT_PUBLIC_GOOGLE_ANALYTICS_ID?: string;
  readonly GEMINI_API_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
