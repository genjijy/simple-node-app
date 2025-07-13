// const request = require("supertest");
// const app = require("../app");

// describe("GET /health", () => {
//   it("should return 200 OK", async () => {
//     const res = await request(app).get("/health");
//     expect(res.statusCode).toEqual(200);
//     expect(res.body).toHaveProperty("status", "UP");
//   });
// });

const request = require("supertest");
const app = require("../app");

describe("GET /health", () => {
  it("should return 200 OK", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: "UP" });
  });
});
