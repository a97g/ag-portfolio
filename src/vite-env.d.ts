/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORMSPREE_ENDPOINT?: string;
  // add more env vars if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
