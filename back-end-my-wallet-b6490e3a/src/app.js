import cors from "cors";
import express from "express";
import userRouter from "./routers/userRouter.js";
import financialEventRouter from "./routers/financialEventRouter.js";
import handleErrors from "./middlewares/handleErrors.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(financialEventRouter);
app.use(handleErrors);

export default app;
