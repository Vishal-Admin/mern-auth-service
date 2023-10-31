import { Request, Response } from "express";

export class AuthContoller {
    regiter(req: Request, res: Response) {
        res.status(201).send();
    }
}
