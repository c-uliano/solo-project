const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Hey there, title is required."],
        minlength: [5, "Hey there, title must be at least 5 characters long."]
    },
    date: {
        type: Date,
        required: [true, "Hey there, date is required."],
    },
    content: {
        type: String,
        required: [true, "Hey there, content is required."],
        minlength: [5, "Hey there, content must be at least 5 characters long."]
    }
}, { timestamps: true });

// const Rename = mongoose.model("Rename", schema);
// module.exports = Rename;
// OR
module.exports = mongoose.model("Post", schema);
