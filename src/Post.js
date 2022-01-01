const mongoose = require('./db')
require('dotenv').config()
const { Schema } = mongoose;

var PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        require: [true, "oi"]
    },
    description: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})


const Post = mongoose.model('Post', PostSchema)

module.exports = Post