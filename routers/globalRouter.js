import express from "express";
import routers from "../routers";

const globalRouter = express.Router();

globalRouter.get(routers.home, (req, res) => res.send("Home"));
globalRouter.get(routers.join, (req, res) => res.send("JOIN"));
globalRouter.get(routers.login, (req, res) => res.send("LOGIN"));
globalRouter.get(routers.logout, (req, res) => res.send("LOGOUT"));
globalRouter.get(routers.search, (req, res) => res.send("SEARCH"));

export default globalRouter;
