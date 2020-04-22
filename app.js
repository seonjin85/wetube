//const express = require('express');
import express, { Router } from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router";

const app = express();

const handleHome = (req, res) => res.send("hello from server");
const handleprofile = (req, res) => res.send("you are on my profile");

//use middlewares
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.use("/user", userRouter);

app.get("/", handleHome);
app.get("/profile", handleprofile);

export default app;
