import { AuthContoller } from "../controllers/AuthController";
import express from "express";
const router = express.Router();
const authContoller = new AuthContoller();

router.post("/register", (req, res) => authContoller.regiter(req, res));

export default router;
