const bodyParser = require("body-parser");
const express = require("express");
const {PersonController} = require("../controllers");
const personRouter = express.Router();

personRouter.use(bodyParser.json());

//create router

personRouter.post("/add", PersonController.create);
personRouter.put("/edit/:id", PersonController.edit);
personRouter.get("/list", PersonController.list);

module.exports = personRouter;