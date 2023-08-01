// const { app, stopServer } = require("../server"); // assuming your app file is named index.js
// const request = require("supertest");
// const sharedContext = require("./testSetup");

// // Test user registration

// // Mock User data for testing
// // const mockUser = {
// //   name: "Nithi",
// //   email: "nithish10100@gmail.com",
// //   mobile: "7305114698",
// //   password: "test1234",
// // };

// const mockUser = {
//   "request_data": "U2FsdGVkX1/r/FvoJ43o849CaMLk1dJdXfluuuas/pQ81AEWwMOGEkGPu4PzxyTAV+VYKbCOkPjmNqaN9rhIJQyy99motuX2GhbqbiOog4DYjZjZrJcAbaUC5c8/SgOIzd2Q9SkUbrTgEzFW70SyRg=="
// };
// // Store the token for authenticated requests
// // let token;

// describe('POST /api/register', () => {
//     test('should register a new user', async () => {
//       const response = await request(app).post('/api/register').send(mockUser);
//       expect(response.statusCode).toBe(200);
//       // expect(response.body).toHaveProperty('user');
//       expect(response.body).toHaveProperty('token');
//     });
//   });
  
//   // Test user login
//   describe('POST /api/login', () => {
//     test('should login an existing user', async () => {
//       const response = await request(app).post('/api/login').send({
//         "request_data": "U2FsdGVkX1+dRp6OKHyf2tvHoR2llUananrcpDKFd0y7qBZZINdJl3EyoAbCML12LQBVACceWr1byM08JNmOWm7ttH90wi+CPUXfO+2d+9k="
//       });
//       expect(response.statusCode).toBe(200);
//       //expect(response.body).toHaveProperty('user');
//       expect(response.body).toHaveProperty('token');
//      // token = response.body.token; // Store the token for future requests
//     });
//   });
  
// // Protected route tests
// describe("Protected Routes", () => {
//   test("GET /api/me should return current user", async () => {
//     const response = await request(app)
//       .get("/api/me")
//       .set("Authorization", `Bearer ${sharedContext.token}`);
//     expect(response.statusCode).toBe(200);
//     // expect(response.body.name).toBe(mockUser.name);
//     // expect(response.body.email).toBe(mockUser.email);
//   });

  

//   /*test('PUT /users/me should update current user', async () => {
//       const updatedUser = {
//         name: 'Updated Name',
//         email: 'updatedemail@example.com',
//       };
//       const response = await request(app)
//         .put('/users/me')
//         .set('Authorization', `Bearer ${token}`)
//         .send(updatedUser);
//       expect(response.statusCode).toBe(200);
//       expect(response.body.name).toBe(updatedUser.name);
//       expect(response.body.email).toBe(updatedUser.email);
//     });
  
//     test('POST /users/logout should log out the current user', async () => {
//       const response = await request(app)
//         .post('/users/logout')
//         .set('Authorization', `Bearer ${token}`);
//       expect(response.statusCode).toBe(200);
//       expect(response.body.message).toBe('Logged out successfully');
//     });
  
//     test('POST /users/logoutAll should log out the current user from all sessions', async () => {
//       const response = await request(app)
//         .post('/users/logoutAll')
//         .set('Authorization', `Bearer ${token}`);
//       expect(response.statusCode).toBe(200);
//       expect(response.body.message).toBe('Logged out from all sessions');
//     });*/
// });
