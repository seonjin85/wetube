//const express = require('express');
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on:http://localhost:${PORT}`);
const handleHome = (req, res) => res.send("hello from server");
const handleprofile = (req, res) => res.send("you are on my profile");

const betweenHome = (req, res, next) => {
  console.log("i'm between");
  next();
};

//use middlewares
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);
app.get("/profile", handleprofile);

app.listen(PORT, handleListening);
