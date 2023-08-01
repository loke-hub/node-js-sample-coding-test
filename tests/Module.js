// const { app } = require("../server"); // assuming your app file is named index.js
// const request = require("supertest");
// const sharedContext = require("./testSetup");

// describe('Controller Tests', () => {

//   it("should return all module", async () => {
//     const res = await request(app)
//       .get("/api/module")
//       .set("Authorization", `Bearer ${sharedContext.token}`);
//     expect(res.statusCode).toBe(200);
//     // expect(res.body.length).toBe(0);
//   });

//   it("should create a new module", async () => {
//     const res = await request(app).post("/api/module").set("Authorization", `Bearer ${sharedContext.token}`).send({
//       "request_data": "U2FsdGVkX1+dy5UnUFUuoCqflg85u6uBSCxi+sxTVgnIz525qpVi1TCjhO4hEU1DtEdLtQjlptbdV48DZ2H4v2KsHAcd0MmiBzbrMN7gtOI=",
//     });
//     expect(res.status).toBe(200);
//   });

//   it("should update an existing module", async () => {
//     const user = await request(app)
//       .post("/api/module").set("Authorization", `Bearer ${sharedContext.token}`)
//       .send({"request_data": "U2FsdGVkX19AcPnVcyqYfz6fGMLoREWG+dmv70QD6ZLhHQtdaw8ynqAeTiGypnC+ZLmaBhlv6jinqHuzRNb7mcCCDsCJLYPpNrrW6uxBIb0="});
//     const res = await request(app)
//       .put(`/api/module/${user.body.data._id}`).set("Authorization", `Bearer ${sharedContext.token}`)
//       .send({ "request_data": "U2FsdGVkX18iEuVxpO/nbFXbLUTGWUyw+Jdpo5yFkgusAZhl0sWoVenuaxLSn2pLv0uEFI2Qi21ifkN5bb6t0A1mkn6gdqLgo/RUwX5GRkc=" });
//     expect(res.status).toBe(200);
//   });

//   it("should deleting a module", async () => {
//     const user = await request(app)
//     .post("/api/module").set("Authorization", `Bearer ${sharedContext.token}`)
//     .send({group_id: '646c5a1b563aa56a60fa957d', name: "Test Role 4"});
//     const res = await request(app).delete(`/api/module/${user.body.data._id}`);
//     expect(res.status).toBe(200);
//   });
// });