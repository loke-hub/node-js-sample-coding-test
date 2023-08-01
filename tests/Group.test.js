const { app, stopServer } = require("../server"); // assuming your app file is named index.js
const request = require("supertest");
const sharedContext = require("./testSetup");

describe("Group CRUD operations", () => {
  // let server;
  beforeAll(async () => {
    //server = require('../server'); // Import the server file
    // await mongoose.connection.dropDatabase();
  });

  afterEach(() => {
    stopServer();
    //server.close();
  });

  it("should return all groups", async () => {
    const res = await request(app)
      .get("/api/group")
      .set("Authorization", `Bearer ${sharedContext.token}`);
    expect(res.statusCode).toBe(200);
    // expect(res.body.length).toBe(0);
  });

  it("should create a new Group", async () => {
    const res = await request(app).post("/api/group").set("Authorization", `Bearer ${sharedContext.token}`).send({
      "request_data": "U2FsdGVkX18SsSHN4X6prchOMEP+UUKDA50p171S5vRpJy26R2eyMqg8AVtbitlT",
    });
    expect(res.status).toBe(200);
  });

  it("should update an existing group", async () => {
   const user = await request(app)
      .post("/api/group").set("Authorization", `Bearer ${sharedContext.token}`)
      .send({ "request_data": "U2FsdGVkX18cq1WXR0VI6GNLUi4ogWVAKG+fE3GU7T5HzX2YYj2Dk2CYidsj+Ugv"});
    const res = await request(app)
      .put(`/api/group/${user.body.data._id}`).set("Authorization", `Bearer ${sharedContext.token}`)
      .send({ "request_data": "U2FsdGVkX19Xan4M3ntoiuUsphdRtUn5+rW16v9lDOov94Pr4SodCR9BBuHVO/z9" });
    expect(res.status).toBe(200);
  });

  it("should deleting a group", async () => {
    const user = await request(app)
      .post("/api/group").set("Authorization", `Bearer ${sharedContext.token}`)
      .send({ "request_data": "U2FsdGVkX18pSQG/TFtK3QxHhyauwU4HW8jONTuqcqYDz6+/wHtSfPoVpFP3qkEs"});
    const res = await request(app).delete(`/api/group/${user.body.data._id}`).set("Authorization", `Bearer ${sharedContext.token}`);
    expect(res.status).toBe(200);
  });
});
