import express from "express";
import routers from "../routers";

const userRouter = express.Router();

userRouter.get(routers.users, (req, res) => res.send("users"));
userRouter.get(routers.usersDetail, (req, res) => res.send("usersDetail"));
userRouter.get(routers.editProfile, (req, res) => res.send("editProfile"));
userRouter.get(routers.changePassword, (req, res) =>  res.send("changePassword"));

export default userRouter;
