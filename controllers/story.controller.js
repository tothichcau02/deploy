const db = require("../models");

const Story = db.story;

// Create a new Person

async function create(req, res, next){
    try {
        if(req.body){
            const newStory = new Story({
                title: req.body.title,
                fans: req.body.fans
            });
            await newStory.save()
            .then(insertedDocs => res.status(201).json(insertedDocs))
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    create
}