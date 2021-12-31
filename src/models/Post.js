const mongoose = require('../db')
require('dotenv').config()

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
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