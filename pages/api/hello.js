import { withSentry } from "@sentry/nextjs";

function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}

export default withSentry(handler);
