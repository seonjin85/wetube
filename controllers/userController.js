export const join = (req, res) => res.render("join", { pageTitle: "join" });

export const login = (req, res) => res.render("login", { pageTitle: "login" });

export const logout = (req, res) =>
  res.render("logout", { pageTitle: "logout" });

export const users = (req, res) => res.render("users", { pageTitle: "users" });

export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "user Detail" });

export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "edit Profile" });

export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "change Password" });
