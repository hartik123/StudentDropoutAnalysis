const mongoose=require("mongoose");

const UserDetailsSchema=new mongoose.Schema(
    {   
    userType: String, 
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    
    });
    
    
const UserInfo =  mongoose.model("UserInfo",UserDetailsSchema);

module.exports = UserInfo;