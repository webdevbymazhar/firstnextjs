const { default: mongoose } = require("mongoose");


let userSchema = mongoose.Schema({
    username : {
        type:String
    },
    email:{
        type:String
    },
    password : {
        type:String
    },

})

let userModel = mongoose.models.User ||  mongoose.model("User",userSchema)
module.exports = userModel

