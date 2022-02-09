import * as Sentry from "@sentry/nextjs";
import { BrowserTracing } from "@sentry/tracing";

import "../styles/globals.css";

Sentry.init({
  dsn: "https://f4238cdc941549ae9fe6103a68d0d06b@o142297.ingest.sentry.io/6193513",

  integrations: [
    new BrowserTracing({
      tracingOrigins: ["localhost", "swapi.dev", /^\//],
      // ... other options
    }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
