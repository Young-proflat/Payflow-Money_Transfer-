const mongoose = require("mongoose");
const userSchema = new mongoose.Schmema({
    name: {
        type: String,
        required: true
    },
    user : {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema);