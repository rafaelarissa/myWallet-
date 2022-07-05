import { Router } from "express";
import * as userController from "../controllers/userController.js";

const authRouter = Router();

authRouter.post("/sign-up", userController.signUp);
authRouter.post("/sign-in", userController.signIn);

export default authRouter;
