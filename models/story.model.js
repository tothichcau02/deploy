const mongoose = require("mongoose");

const {Schema} = mongoose;

const storySchema = new Schema({
    title: {
        type: String,
        require: [true, "Title is required"],
        maxLength: 100
    },   
    fan: [
        {
            type: Schema.Types.ObjectId,
            ref: "person"
        }
    ]
}, {
     timestamps: true
});

const Story = mongoose.model("story", storySchema);

module.exports = Story;