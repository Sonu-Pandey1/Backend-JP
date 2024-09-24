
const express = require("express");
const userDashboardControllers = require("../Controllers/userDashboard-Controller")

const Router = express.Router();

Router.route("/").get(userDashboardControllers.home);

module.exports = Router;