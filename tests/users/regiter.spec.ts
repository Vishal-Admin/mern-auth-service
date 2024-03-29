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
        it("should return valid json responce", async () => {
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
            expect(
                (response.headers as Record<string, string>)["content-type"],
            ).toEqual(expect.stringContaining("json"));
        });
        // it("should persist the user in database", async () => {
        //     //Arrange
        //     const userData = {
        //         firstName: "Vishal",
        //         lastName: "P",
        //         email: "vishalpanchal570@gmail.com",
        //         password: "secret",
        //     };
        //     //Act
        //     const response = await request(app)
        //         .post("/auth/register")
        //         .send(userData);
        //     //Assert
        //     expect(
        //         (response.headers as Record<string, string>)["content-type"],
        //     ).toEqual(expect.stringContaining("json"));
        // });
    });
    describe("Filds are missing", () => {});
});
