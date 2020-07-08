import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;

  res.render("search", { pageTitle: "search", searchingBy, videos });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "upload" });

export const postUpload = (req, res) => {
  const {
    body: { file, title, description },
  } = req;

  //To Do: upload and save video
  res.redirect(routes.videoDetail(123));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "video Detail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "edit Video" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "delete Video" });
