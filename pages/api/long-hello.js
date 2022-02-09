import { withSentry } from "@sentry/nextjs";
import axios from "axios";

function handler(req, res) {
  console.log(req.headers);
  setTimeout(async () => {
    const { data } = await axios.get("https://swapi.dev/api/planets/3");
    res.status(200).json({ name: "John Doe", long: true, planet: data });
  }, 4000);
}

export default withSentry(handler);
