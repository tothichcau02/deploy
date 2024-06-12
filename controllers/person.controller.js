const db = require("../models");

const Person = db.person;

// Create a new Person

async function create(req, res, next){
    try {
        if(req.body){
            const newPerson = new Person({
                name: req.body.name,
                age: req.body.age,
                stories: req.body.stories
            });
            await newPerson.save()
            .then(insertedDocs => res.status(201).json(insertedDocs))
        }
    } catch (error) {
        next(error);
    }
}

// edit 
async function edit(req, res, next){
    try {
        if(req.body){
            await Person.findByIdAndUpdate(
                req.params.id,
                {
                    $set: {name: req.body.name, age: req.body.age},
                    $addToSet: {stories: req.body.stories}
                }
            );
            res.status(200).json(await Person.findById(req.params.id));
        }
    } catch (error) {
        next(error);
    }
}

// list
async function list(req, res, next){
    const people = await Person.find({}).populate("stories");
    const result = people?.map(p=>{
        return {
            _id: p._id,
            name: p.name,
            age: p.age,
            stories: p.stories?.map(s=> s.title)
        }
    })
    res.status(200).json(result);
}
module.exports = {
    create,
    edit,
    list
}