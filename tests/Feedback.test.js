const request = require('supertest');
const sharedContext = require("./testSetup");
// const crypto = require('crypto-js');
const { app, stopServer } = require("../server");

describe('Controller Tests', () => {
  beforeAll(async () => {
      //server = require('../server'); // Import the server file
      // await mongoose.connection.dropDatabase();
    });
    afterEach(() => {
      stopServer();
      //server.close();
    });
it("should  getAll Feedback", async () => {
  const res = await request(app)
    .get("/api/feedback")
    .set("Authorization", `Bearer ${sharedContext.token}`);
  expect(res.statusCode).toBe(200);
  // expect(res.body.length).toBe(0);
});
it("should  individual Feedback", async () => {
  const res = await request(app)
    .get("/api/feedback/individual")
    .set("Authorization", `Bearer ${sharedContext.token}`);
  expect(res.statusCode).toBe(200);
  
});
it("should  individual count Feedback", async () => {
  const res = await request(app)
    .get("/api/feedback/individual/count")
    .set("Authorization", `Bearer ${sharedContext.token}`)
    .send({"request_data":"U2FsdGVkX192YiN8cqyERpwrC9irFJcbntd66447hts8d/Mb6XvZdoOi1A2ZqiZO"})
  expect(res.statusCode).toBe(200);
  
});
it("should individual reply Feedback", async () => {
  const res = await request(app)
    .get("/api/feedback/reply/649d573298bc964f0d7ca7d7")
    .set("Authorization", `Bearer ${sharedContext.token}`)
    .send({"request_data":"U2FsdGVkX19M0KCm+J2Bk0vVyShMAI1hFChh5Yvpv7NCHy5x3mSU3nlbar6IR3TwrvUJE8SO0x1XHlzw31k+JDj6UQhcQcX/XeBOnBt9qBI="})
  expect(res.statusCode).toBe(200);
  
});
it("should individual read Feedback", async () => {
  const res = await request(app)
    .get("/api/feedback/individual/read/64ae659989988230a1e34329")
    .set("Authorization", `Bearer ${sharedContext.token}`);
  expect(res.statusCode).toBe(200);
  
});
it("should getone  Feedback", async () => {
  const res = await request(app)
    .get("/api/feedback/649c0f543eaa65dc422fd85e")
    .set("Authorization", `Bearer ${sharedContext.token}`);
  expect(res.statusCode).toBe(200);
  
});
it("should  creat Feedback", async () => {
  const res = await request(app)
    .post("/api/feedback")
    .set("Authorization", `Bearer ${sharedContext.token}`)
    .send({"request_data": "U2FsdGVkX19cMIIPm6WmoCASWOgJaIbNg0gyVMBtq5SKHaXHj5c2fpJfg7asE0Qb4NvDcT4PHBy33F5xzQHqMraW7JQ0sBK+BhY5mnnRWEs="});       
  expect(res.statusCode).toBe(200);
 
});
it("should  update Feedback", async () => {
  const res = await request(app)
    .put("/api/feedback/649c0f543eaa65dc422fd85e")
    .set("Authorization", `Bearer ${sharedContext.token}`)
    .send({"request_data": "U2FsdGVkX19cMIIPm6WmoCASWOgJaIbNg0gyVMBtq5SKHaXHj5c2fpJfg7asE0Qb4NvDcT4PHBy33F5xzQHqMraW7JQ0sBK+BhY5mnnRWEs="});       
  expect(res.statusCode).toBe(200);
  
});
it("should  delete Feedback", async () => {
  const res = await request(app)
    .delete("/api/feedback/649c0f543eaa65dc422fd85e")
    .set("Authorization", `Bearer ${sharedContext.token}`)
     expect(res.statusCode).toBe(200);
 
});
// it("should  getAllByIndividual Activity", async () => {
//   const res = await request(app)
//     .get("/api/feedback")
//     .set("Authorization", `Bearer ${sharedContext.token}`);
//   expect(res.statusCode).toBe(200);
//   // expect(res.body.length).toBe(0);
// });
});