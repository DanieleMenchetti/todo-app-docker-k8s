const test = require("node:test");
const assert = require("node:assert");
const http = require("node:http");

const app = require("../src/app");

function request(path) {
  return new Promise((resolve, reject) => {
    const server = app.listen(0, () => {
      const { port } = server.address();

      const req = http.request(
        {
          hostname: "127.0.0.1",
          port,
          path,
          method: "GET",
        },
        (res) => {
          let body = "";

          res.on("data", (chunk) => {
            body += chunk;
          });

          res.on("end", () => {
            server.close();

            resolve({
              statusCode: res.statusCode,
              body,
            });
          });
        }
      );

      req.on("error", (error) => {
        server.close();
        reject(error);
      });

      req.end();
    });
  });
}

test("GET /api/health returns HTTP 200 and status ok", async () => {
  const response = await request("/api/health");

  assert.strictEqual(response.statusCode, 200);

  const data = JSON.parse(response.body);

  assert.strictEqual(data.status, "ok");
});