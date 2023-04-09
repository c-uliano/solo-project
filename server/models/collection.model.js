// TODO: RENAME FILE

const mongoose = require('mongoose');

// * UPDATE KEY NAMES TO WHAT IS NEEDED IN THE DOCUMENT
const schema = new mongoose.Schema({
    KEY_RENAME: {
        type: String,
        required: [true, "KEY_RENAME is required."],
        minlength: [10, "KEY_RENAME must be at least 10 characters long."]
    },
    KEY_RENAME: {
        type: Number,
        required: [true, "KEY_RENAME is required."],
        minlength: [3, "KEY_RENAME must be at least 3 characters long."]
    }
}, { timestamps: true });

// const Rename = mongoose.model("Rename", schema);
// module.exports = Rename;
// OR
module.exports = mongoose.model("Rename", schema);
