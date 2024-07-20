const app = require("./app");
const supertest = require("supertest");

const request = supertest(app);

//const {describe} = require('jest-circus');

describe('/test node endpoint',() =>{
    it("should return a response", async() =>{
       const response=await request.get("/testNode");
       expect(response.status).toBe(200);
       expect(response.text).toBe("Yes the testNode endpoint worked");
    });
});