const { default: mongoose } = require("mongoose");

let blogSchema = mongoose.Schema({
    title : {
        type:String
    },
    category : {
        type:String
    },
    image : {
        type:String
    },
    description : {
        type : String
    }
})


let blogModel = mongoose.models.Blog || mongoose.model("Blog", blogSchema)

module.exports = {blogModel}