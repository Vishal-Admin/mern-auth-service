import request from "supertest";
import { calculateDiscount } from "./src/utils";
import app from "./src/app";

describe("App", () => {
    // teting example for function
    test("for discount fun()", () => {
        const result = calculateDiscount(100, 10);
        expect(result).toBe(10);
    });

    // teting example for APIs
    test("TEST api callbacks status 200", async () => {
        const response = await request(app).get("/").send();
        expect(response.statusCode).toBe(200);
    });
});
