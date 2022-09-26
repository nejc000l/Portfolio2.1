export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
        NEXT_PUBLIC_BASE_URL: string;
        NEXT_PUBLIC_SANITY_PROJECT_ID: string;
      ENV: 'test' | 'dev' | 'prod';
    }
  }
}