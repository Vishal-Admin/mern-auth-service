import app from "../../src/app";
import request from "supertest";

describe("POST /auth/register", () => {
    describe("Give all filds", () => {
        it("should return the 201 status code", async () => {
            //Arrange
            const userData = {
                firstName: "Vishal",
                lastName: "P",
                email: "vishalpanchal570@gmail.com",
                password: "secret",
            };
            //Act
            const response = await request(app)
                .post("/auth/register")
                .send(userData);
            //Assert
            expect(response.statusCode).toBe(201);
        });
    });
    describe("Filds are missing", () => {});
});
