const { default: mongoose } = require("mongoose");


let blogSchema = mongoose.Schema({
    title :{
        type:String
    },
    category : {
        type:String
    },
    description : {
        type:String
    },
    image : {
        type:String
    }
})

let BlogModel = mongoose.models.Blog || mongoose.model("Blog",blogSchema)
module.exports = {BlogModel}