const mongoose=require("mongoose");
const studentModels=new mongoose.Schema({
    userName:{
        type:String
    },
    Gender:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }

})

const student=mongoose.model("student",studentModels);
module.exports=student;