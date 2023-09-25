// const express=require("express");
// const app=express();

// const mongoose=require("mongoose");
// app.use(express.json())
// const cors=require("cors");
// app.use(cors());
// const bcrypt=require("bcryptjs");

// const jwt=require("jsonwebtoken");
// const JWT_SECRET="bcbce.iww2974505975593"

// const mongoUrl="mongodb+srv://denish:Suhagiya%40321@cluster0.iuxj3rp.mongodb.net/"
// mongoose.connect(mongoUrl,
//     {
//         useNewUrlParser:true,
//     })
//     .then(()=>{console.log("connected to database");})
// .catch(e=>console.log(e));


// require("./userDetails")
// const User=mongoose.model("UserInfo");
// app.post("/register",async(req,res)=>{
// const{fname,lname,email,password}=req.body;

// const encrytedPassword= await bcrypt.hash(password,10);
// try {
//     const oldUser= await User.findOne({email});
//     if(oldUser){
//      return  res.send({error:"user exists"});
//     }
//    await User.create({
//     fname,
//     lname,
//     email,
//     password:encrytedPassword,
//    });
//    res.send({status:"ok"});
// } catch (error) {
//     res.send({status:"error"});
// }
// })


// app.post("/login-user",async(req,res)=>
// {
//     const{email,password}=req.body;
//     const user=await User.findOne({email});
//     if(!user){
//         return  res.send({error:"user not found"});
//        }
//      if(await bcrypt.compare(password,user.password))  
//        {
//         const token=jwt.sign({email:user.email},JWT_SECRET);
//         if(res.status(201)){
//             return res.json({status:"ok", data:token});
//         } else{
//             return res.json({error:"error"});
//         }
//        }
//        res.json({status:"error",error:"invalid password"});

// });

// app.post("/userData",async(req,res)=>{
//     const {token}=req.body;

//     try {
//         const user=jwt.verify(token,JWT_SECRET);
//         console.log(user);
//         const useremail=user.email;
//         User.findOne({email:useremail})
//         .then((data)=>{
//             res.send({status:"ok",data:data});
//         })
//         .catch((error)=>{
//             res.send({status:"error", data:data});
//          });
//     } catch (error) {
        
//     }
// });

// app.listen(5000,()=>{
//     console.log("server started");
// }
// )
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const UserInfo = require('./userDetails');

//Database Connection
const mongoUrl="mongodb+srv://denishsuhagiya18:Suhagiya%40321@cluster0.tvzkbyw.mongodb.net/"
mongoose.connect(mongoUrl,
    {
        useNewUrlParser:true,
    })
    .then(()=>{console.log("connected to database");})
.catch(e=>console.log(e));

app.use(cors());
app.use(bodyParser.json());

// Store user data (for demonstration purposes)
const users = [];

// Handle user signup
app.post('/api/signup', async (req, res) => {
  const { userType, firstName, lastName, email, password } = req.body;

  // Check if the email is already registered
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(400).json({ error: 'Email is already registered' });
  }

  // Create a new user object
  const newUser = await UserInfo.create({
    userType, 
    firstName,
    lastName,
    email,
    password,
  });

  // Store the new user
  users.push(newUser);
  await newUser.save();

  // For demonstration purposes, just return the user object
  res.json(newUser);
});

// Handle user login
app.post('/api/login', async (req, res) => {
  const { userType, email, password } = req.body;

  // Find the user by email
  const user = await users.find((user) => user.email === email);

  if (!user) {
    return res.status(401).json({ error: 'User not found' });
  }

  // Check if the user type matches
  if (user.userType !== userType) {
    return res.status(401).json({ error: 'User type does not match' });
  }

  // Check if the password is correct
  if (user.password !== password) {
    return res.status(401).json({ error: 'Invalid password' });
  }

  // For demonstration purposes, you can generate and send a token for authentication
  const token = 'your-auth-token-here';
  res.json({ token });  // res.json({token:token})
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
