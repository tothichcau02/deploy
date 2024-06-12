const mongoose = require("mongoose");
const Story = require("./story.model");
const Person = require("./person.model");

mongoose.Promise = global.Promise;

const db = {};

db.person = Person;
db.story = Story;

db.connectDB = async() => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: process.env.DB_NAME,
    })
    .then(() => {
        console.log("Connect to MongoDB Success!");
    })
    .catch(error =>{
        console.error(error.message);
        process.exit();
    })
}

module.exports = db;