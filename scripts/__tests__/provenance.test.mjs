import assert from "node:assert/strict";
import { once } from "node:events";
import { createServer } from "node:http";
import { createRequire } from "node:module";
import path from "node:path";
import test from "node:test";

// Exercise the exact sigstore instance used by Lerna's libnpmpublish.
const require = createRequire(import.meta.url);
const lernaRequire = createRequire(require.resolve("lerna"));
const publishRequire = createRequire(lernaRequire.resolve("libnpmpublish"));
const { createBundleBuilder } = publishRequire(
  path.join(path.dirname(publishRequire.resolve("sigstore")), "config.js")
);

const uuid = "existing-entry";
const entry = { body: "original-signed-entry", logIndex: 42 };

async function withRekor(t, { status = 409, location = true, getStatus = 200 }, run) {
  const requests = [];
  const server = createServer((request, response) => {
    requests.push(`${request.method} ${request.url}`);
    request.resume();
    response.setHeader("Content-Type", "application/json");
    if (request.method === "POST") {
      if (location) response.setHeader("Location", `/api/v1/log/entries/${uuid}`);
      response.writeHead(status);
      response.end(JSON.stringify(status === 201 ? { [uuid]: entry } : { message: "entry conflict" }));
    } else {
      response.writeHead(getStatus);
      response.end(JSON.stringify(getStatus === 200 ? { [uuid]: entry } : { message: "entry unavailable" }));
    }
  });
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  t.after(() => new Promise((resolve) => server.close(resolve)));
  const builder = createBundleBuilder("dsseEnvelope", {
    rekorURL: `http://127.0.0.1:${server.address().port}`,
    retry: 0,
    timeout: 2000
  });
  await run(builder.witnesses[0].tlog, requests);
}

test("provenance reuses an existing Rekor entry after HTTP 409", async (t) => {
  await withRekor(t, {}, async (client, requests) => {
    assert.deepEqual(await client.createEntry({}), { ...entry, uuid });
    assert.deepEqual(requests, ["POST /api/v1/log/entries", `GET /api/v1/log/entries/${uuid}`]);
  });
});

test("new Rekor entries do not require conflict recovery", async (t) => {
  await withRekor(t, { status: 201 }, async (client, requests) => {
    assert.deepEqual(await client.createEntry({}), { ...entry, uuid });
    assert.deepEqual(requests, ["POST /api/v1/log/entries"]);
  });
});

test("failure to retrieve the existing entry still fails publication", async (t) => {
  await withRekor(t, { getStatus: 404 }, async (client) => {
    await assert.rejects(client.createEntry({}), { code: "TLOG_FETCH_ENTRY_ERROR" });
  });
});

for (const options of [{ status: 400 }, { location: false }]) {
  test(`other Rekor errors remain fatal: ${JSON.stringify(options)}`, async (t) => {
    await withRekor(t, options, async (client, requests) => {
      await assert.rejects(client.createEntry({}), { code: "TLOG_CREATE_ENTRY_ERROR" });
      assert.deepEqual(requests, ["POST /api/v1/log/entries"]);
    });
  });
}
