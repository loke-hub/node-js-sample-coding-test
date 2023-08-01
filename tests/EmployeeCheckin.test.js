const request = require('supertest');
const sharedContext = require("./testSetup");
// const crypto = require('crypto-js');
// const app = require('../server');
const { app } = require("../server");
 // assuming your app file is named index.js
// const { getAll, getOne, create, update, delete } = require('../app/Controllers/Account');

describe('Controller Tests', () => {
    beforeAll(async () => {
      });
      afterEach(() => {
        stopServer();   
      });
  // Write your tests here
  it("should  getall account", async () => {
    const res = await request(app)
      .get("/api/employee_checkin/employee_checkin")
      .set("Authorization", `Bearer ${sharedContext.token}`);
    expect(res.statusCode).toBe(500);
    
  });
  it("should  getOne account", async () => {
    const res = await request(app)
      .get("/api/employee_checkin/:id")
      .set("Authorization", `Bearer ${sharedContext.token}`);
    expect(res.statusCode).toBe(500);
    
  });
  it("should  creat account", async () => {
    const res = await request(app)
      .post("/api/employee_checkin")
      .set("Authorization", `Bearer ${sharedContext.token}`)
      .send({"request_data": "U2FsdGVkX19AcPnVcyqYfz6fGMLoREWG+dmv70QD6ZLhHQtdaw8ynqAeTiGypnC+ZLmaBhlv6jinqHuzRNb7mcCCDsCJLYPpNrrW6uxBIb0="});       
    expect(res.statusCode).toBe(500);
   
  });
  it("should  update account", async () => {
    const res = await request(app)
      .post("/api/employee_checkin/update")
      .set("Authorization", `Bearer ${sharedContext.token}`)
      .send({"request_data": "U2FsdGVkX19AcPnVcyqYfz6fGMLoREWG+dmv70QD6ZLhHQtdaw8ynqAeTiGypnC+ZLmaBhlv6jinqHuzRNb7mcCCDsCJLYPpNrrW6uxBIb0="});       
    expect(res.statusCode).toBe(500);
    
  });
  it("should  delete account", async () => {
    const res = await request(app)
      .post("/api/delete")
      .set("Authorization", `Bearer ${sharedContext.token}`)
      .send({"request_data": "U2FsdGVkX19AcPnVcyqYfz6fGMLoREWG+dmv70QD6ZLhHQtdaw8ynqAeTiGypnC+ZLmaBhlv6jinqHuzRNb7mcCCDsCJLYPpNrrW6uxBIb0="});       
    expect(res.statusCode).toBe(500);
   
  });

});
