import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  let name = c.req.query('name') || "Hono";

  return c.json({ message: `Hello ${name}!` });
});

export default app;
