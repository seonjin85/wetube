//const express = require('express');
import express, { Router } from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(localsMiddleware);

app.use(routes.home, globalRouter); //const HOME = "/";
app.use(routes.users, userRouter);  //const USERS = "/users";
app.use(routes.videos, videoRouter);//const VIDEOS = "/videos";

export default app;
