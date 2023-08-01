const request = require('supertest');
const sharedContext = require("./testSetup");
const crypto = require('crypto-js');
// const app = require('../server');
// const { app } = require("../index");
const { app, stopServer } = require("../server");
 // assuming your app file is named index.js
// const { getAll, getOne, create, update, delete } = require('../app/Controllers/Account');
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
  
  // Write your tests here
  it("should  return getAll account", async () => {
    const res = await request(app)
      .get("/api/account")
      .set("Authorization", `Bearer ${sharedContext.token}`);
    expect(res.statusCode).toBe(200);
    // expect(res.body.length).toBe(0);
  });
  it("should  getOne account", async () => {
    const res = await request(app)
      .get("/api/account/64999c773ec1bbd54c7e6f74")
      .set("Authorization", `Bearer ${sharedContext.token}`);
    expect(res.statusCode).toBe(200);
    
  });
  it("should  creat account", async () => {
    const res = await request(app)
      .post("/api/account")
      .set("Authorization", `Bearer ${sharedContext.token}`)
      .send({"request_data": "U2FsdGVkX19htBNvsyaTG5kkbN8WfTBHo61aLWNm+31qkv/VgIkVincDjmsV34Pvl5BlQPgKcxCbCvH2AQdUMkexuydHoAlXVyQljIg6H83BhpX+T9+KLlRCAX6nQhE8dZeMKioap9HiFXDs/mzmzKil+9amKBma7VkJw8qe681a1nJZjo3m8dSuoyWS3Sul3HqEkvCvtbPv9UqGT8FU5bBrJtW/6KL56bBryNXNQ/+UHpG3ZzNc1evnnzq6HQFzS7FvZN6yYwFAcdO8L9SVDXK4dd8au66xNMjd8XMdeN8+RRe77+uZLGQ7AZE6GtYOKyXw8cRgpNzneSSj9doGprrDFSYF2zcf2oXgpAS4Z3AOtfVI0ucYDM7PWwmDIoxNNb7oAiB7RhZwhVr+E1yDRIlbfOp0xpcsYjEU1+RpvdQNtJvdjWitJATmR0JQEo4WASqWO2XJTLuYbprql8FMng=="});       
    expect(res.statusCode).toBe(400);
   
  });
  it("should  update account", async () => {
    const res = await request(app)
      .put("/api/account/649999643ec1bbd54c7e6f6d")
      .set("Authorization", `Bearer ${sharedContext.token}`)
      .send({"request_data": "U2FsdGVkX19htBNvsyaTG5kkbN8WfTBHo61aLWNm+31qkv/VgIkVincDjmsV34Pvl5BlQPgKcxCbCvH2AQdUMkexuydHoAlXVyQljIg6H83BhpX+T9+KLlRCAX6nQhE8dZeMKioap9HiFXDs/mzmzKil+9amKBma7VkJw8qe681a1nJZjo3m8dSuoyWS3Sul3HqEkvCvtbPv9UqGT8FU5bBrJtW/6KL56bBryNXNQ/+UHpG3ZzNc1evnnzq6HQFzS7FvZN6yYwFAcdO8L9SVDXK4dd8au66xNMjd8XMdeN8+RRe77+uZLGQ7AZE6GtYOKyXw8cRgpNzneSSj9doGprrDFSYF2zcf2oXgpAS4Z3AOtfVI0ucYDM7PWwmDIoxNNb7oAiB7RhZwhVr+E1yDRIlbfOp0xpcsYjEU1+RpvdQNtJvdjWitJATmR0JQEo4WASqWO2XJTLuYbprql8FMng=="});       
    expect(res.statusCode).toBe(200);
    
  });
  it("should  delete account", async () => {
    const res = await request(app)
      .delete("/api/account/648c56df3113bc9cd311ea36")
      .set("Authorization", `Bearer ${sharedContext.token}`)
      expect(res.statusCode).toBe(200);
   
  });

});
