import express from "express";
import routers from "../routers";

const videoRouter = express.Router();

videoRouter.get(routers.videos, (req, res) => res.send("videos"));
videoRouter.get(routers.upload, (req, res) => res.send("upload"));
videoRouter.get(routers.videoDetail, (req, res) => res.send("videoDetail"));
videoRouter.get(routers.editVideo, (req, res) => res.send("editVideo"));
videoRouter.get(routers.deleteVideo, (req, res) => res.send("deleteVideo"));

export default videoRouter;
