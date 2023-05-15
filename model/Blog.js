const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true,
        default : "Annonymous"
    },
    description: {
        type : String,
        minlength : 10
    },
    date : {
        type : Date,
        date : Date.now()
    },
    likes : Number,
    Comment : {
        type : String,
        des : String,
        date : Date.now()
    }
})

module.exports = mongoose.model('blog',blogSchema);