
const request = require('supertest');
const sharedContext = require("./testSetup");
// const crypto = require('crypto-js');
const { app, stopServer } = require("../server");
// const { app } = require("../server");
// const { getAll, getOne, create, update, delete } = require('../app/Controllers/Activity');

describe('Controller Tests', () => {
    beforeAll(async () => {
        //server = require('../server'); // Import the server file
        // await mongoose.connection.dropDatabase();
      });
      afterEach(() => {
        stopServer();
        //server.close();
      });
  it("should  getAll Activity", async () => {
    const res = await request(app)
      .get("/api/activity")
      .set("Authorization", `Bearer ${sharedContext.token}`);
    expect(res.statusCode).toBe(200);
    // expect(res.body.length).toBe(0);
  });
  it("should  getOne Activity", async () => {
    const res = await request(app)
      .get("/api/activity/64928bfd6ae9c6edcec70ffd")
      .set("Authorization", `Bearer ${sharedContext.token}`);
    expect(res.statusCode).toBe(200);
    
  });
  it("should  creat Activity", async () => {
    const res = await request(app)
      .post("/api/activity")
      .set("Authorization", `Bearer ${sharedContext.token}`)
      .send({"request_data": "U2FsdGVkX18m7oPbDxKQYFfLDO5ZjdEAyb27L5tLFB1aPsv4w4m4gR4RjiD9QQFA"});       
    expect(res.statusCode).toBe(400);
   
  });
  it("should  update Activitys", async () => {
    const res = await request(app)
      .put("/api/activity/648c56df3113bc9cd311ea36")
      .set("Authorization", `Bearer ${sharedContext.token}`)
      .send({"request_data": "U2FsdGVkX18tTnDRb93e2aFh+XiO3tvBLEPjOovTo+ovsj9fbstpXvF3R6X7crrz"});       
    expect(res.statusCode).toBe(400);
    
  });
  it("should  delete Activitys", async () => {
    const res = await request(app)
      .delete("/api/activity/648c56df3113bc9cd311ea36")
      .set("Authorization", `Bearer ${sharedContext.token}`)
       expect(res.statusCode).toBe(200);
   
  });
});