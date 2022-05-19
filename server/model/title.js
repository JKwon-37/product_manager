const mongoose = require("mongoose");

const TitleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "{PATH} must be present."],
        minlength: [3, "{PATH} must be at least 3 char long."]
    },
    price: {
        type: Number,
        required: [true, "{PATH} must be present."],
        min: [0, "{PATH} must be a positive integer!"]
    },
    description: {
        type: String,
        required: [true, "{PATH} must be present."],
        minlength: [10, "{PATH} must be at least 10 char long."]
    }
})

const Title = mongoose.model("Title", TitleSchema);
module.exports = Title;