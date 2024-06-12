const bodyParser = require("body-parser");
const express = require("express");
const {StroyController} = require("../controllers");
const storyRouter = express.Router();

storyRouter.use(bodyParser.json());

//create router

storyRouter.post("/add", StroyController.create);

module.exports = storyRouter;