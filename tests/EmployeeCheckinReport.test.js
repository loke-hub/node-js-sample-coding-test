// const request = require('supertest');
// const app = require('../server'); 
// const sharedContext = require("./testSetup");
// const crypto = require('crypto-js');
// // assuming your app file is named index.js
// // const { getAll, getOne, create, update, delete } = require('../app/Controllers/EmployeeCheckinReport');

// describe('Controller Tests', () => {
//   // Write your tests here
//   it("should  getAll report", async () => {
//     const res = await request(app)
//       .get("/api/getAll")
//       .set("Authorization", `Bearer ${sharedContext.token}`);
//     expect(res.statusCode).toBe(500);
    
//   });
//   it("should  getCount report", async () => {
//     const res = await request(app)
//       .get("/api/getCount")
//       .set("Authorization", `Bearer ${sharedContext.token}`);
//     expect(res.statusCode).toBe(500);
    
//   });
//   it("should  getExport report", async () => {
//     const res = await request(app)
//       .get("/api/getExport")
//       .set("Authorization", `Bearer ${sharedContext.token}`);
//     expect(res.statusCode).toBe(500);
    
//   });
//   it("should  getCheckINReport report", async () => {
//     const res = await request(app)
//       .get("/api/getCheckINReport")
//       .set("Authorization", `Bearer ${sharedContext.token}`);
//     expect(res.statusCode).toBe(500);
    
//   });
// });