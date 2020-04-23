import express from "express";
import routers from "../routers";
import { home, search } from "../controllers/videoController";
import { join, login, logout } from "../controllers/usersController";

const globalRouter = express.Router();

globalRouter.get(routers.home, home);
globalRouter.get(routers.search, search);
globalRouter.get(routers.join, join);
globalRouter.get(routers.login, login);
globalRouter.get(routers.logout, logout);

export default globalRouter;
