import express from "express";
import routers from "../routers";
import {
  users,
  usersDetail,
  editProfile,
  changePassword,
} from "../controllers/usersController";

const userRouter = express.Router();

userRouter.get(routers.users, users);
userRouter.get(routers.usersDetail, usersDetail);
userRouter.get(routers.editProfile, editProfile);
userRouter.get(routers.changePassword, changePassword);

export default userRouter;
