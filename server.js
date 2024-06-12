const express = require("express");

const morgan = require("morgan");

const bodyParser = require("body-parser");

const httpError = require("http-errors");
const db = require("./models");
const {PersonRouter , StoryRouter } = require("./routes");
require("dotenv").config();

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());

app.get("/", (req, res , next) => {
     res.status(200).json({
        message: "Welcome to REST api NODEJS"
     });
});

app.use("/api/person", PersonRouter);
app.use("/api/story", StoryRouter);

app.use(async (req, res, next) => {
    next(httpError.NotFound());
  });
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.send({
      status: error.status || 500,
      message: error.message,
    });
  });

app.listen(process.env.PORT, process.env.HOST_NAME, () => {
    console.log(`Server is running at: http://${process.env.HOST_NAME}:${process.env.PORT}`);
    db.connectDB();
})

