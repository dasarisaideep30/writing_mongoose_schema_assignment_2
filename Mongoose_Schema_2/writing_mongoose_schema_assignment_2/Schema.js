const mongoose = require('mongoose');

// Comment Subdocument Schema
const Comment = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    message: {
        type: String,
        require: true,
    },
    commentedAt: {
        type: Date,
        default: Date.now,
    },
});

// Blog Post Schema
const User = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
            minlength: [5, 'Title must be at least 5 characters long'],
        },
        content: {
            type: String,
            require: true,
            minlength: [50, 'Content must be at least 50 characters long'],
        },
        author: {
            type: String,
            require: true,
        },
        tags: {
            type: [String],
            default: [],
        },
        category: {
            type: String,
            default: 'General',
        },
        likes: {
            type: [String],
        },
        comments: {
            type: [Comment], // Embedding comments as a subdocument array
            default: [],
        },
        createdAt: {
            type: Date,
            default: Date.now,
            immutable: true,
        },
    },
    {
        timestamps: true,
    }
);

const user = mongoose.model('user', User);
module.exports = user;
