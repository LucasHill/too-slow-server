import request from "supertest";
import app from "../src/app";

describe("POST /encryptPassword", () => {
    it("should return 200 OK", () => {
    
      return request(app)
        .post("/encryptPassword")
        .send({
          "password":123
        })
        .expect(200, { "encryptedPassword": 3183409185201566 } )
    });
});
