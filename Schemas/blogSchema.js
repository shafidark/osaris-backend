const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    Header:{
        type:String,
        require: true,
    },
    description:{
        type:String,
        require: true,
    },
    date:{
        type: Date,
        default: Date.now,
    }
});

module.exports = blogSchema;