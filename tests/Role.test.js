// const { app } = require("../server"); // assuming your app file is named server.js
// const crypto = require('crypto-js');
// const request = require("supertest");
// const sharedContext = require("./testSetup");


// describe('Controller Tests', () => {
//   /*test('Testing getAll Function',() => {
//     expect(Role.sum(5,6)).toBe(11);
//   }),
//   test('Testing getAll Function',() => {
//     expect(Role.sum1(5,6)).toBe(11);
//   }),
//   */


//   it("should return all role", async () => {
//     const res = await request(app)
//       .get("/api/role")
//       .set("Authorization", `Bearer ${sharedContext.token}`);
//     expect(res.statusCode).toBe(200);
//     // expect(res.body.length).toBe(0);
//   });

//   it("should create a new role", async () => {
//     const res = await request(app).post("/api/role").set("Authorization", `Bearer ${sharedContext.token}`).send({
//       "request_data": "U2FsdGVkX1+dy5UnUFUuoCqflg85u6uBSCxi+sxTVgnIz525qpVi1TCjhO4hEU1DtEdLtQjlptbdV48DZ2H4v2KsHAcd0MmiBzbrMN7gtOI=",
//     });
//     expect(res.status).toBe(200);
//   });

//   it("should update an existing role", async () => {
//     const user = await request(app)
//       .post("/api/role").set("Authorization", `Bearer ${sharedContext.token}`)
//       .send({"request_data": "U2FsdGVkX19AcPnVcyqYfz6fGMLoREWG+dmv70QD6ZLhHQtdaw8ynqAeTiGypnC+ZLmaBhlv6jinqHuzRNb7mcCCDsCJLYPpNrrW6uxBIb0="});
//     const res = await request(app)
//       .put(`/api/role/${user.body.data._id}`).set("Authorization", `Bearer ${sharedContext.token}`)
//       .send({ "request_data": "U2FsdGVkX18iEuVxpO/nbFXbLUTGWUyw+Jdpo5yFkgusAZhl0sWoVenuaxLSn2pLv0uEFI2Qi21ifkN5bb6t0A1mkn6gdqLgo/RUwX5GRkc=" });
//     expect(res.status).toBe(200);
//   });

//   it("should deleting a role", async () => {
//     const user = await request(app)
//     .post("/api/role").set("Authorization", `Bearer ${sharedContext.token}`)
//     .send({"request_data": "U2FsdGVkX1/zW1a4niuvYYnipjMLBcdBzSEI9dfWtCmWGPy1LvvnrhcBcl+upvXqjU355/rkScWzRW83arEJbtSTHIYyd4L7POi3J1hn4Yg="});
//     const res = await request(app).delete(`/api/role/${user.body.data._id}`);
//     expect(res.status).toBe(200);
//   });
// });