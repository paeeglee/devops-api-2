import { describe, expect, it } from "bun:test";
import app from ".";

describe("Say hello to the world!", () => {
  it("Should return 'Hello Hono!' when name is not provided", async () => {
    const req = new Request("http://localhost/");
    const res = await app.fetch(req);
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ message: "Hello Hono!" });
  });

  it("Should return 'Hello <name>!' when name is provided", async () => {
    const req = new Request("http://localhost?name=World");
    const res = await app.fetch(req);
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ message: "Hello World!" });
  });
});
