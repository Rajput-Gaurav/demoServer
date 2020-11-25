// create Schema:
const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    firstname: {type: String},
    lastname: {type: String},
    email: {type: String},
    password: {type: String}
})

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;