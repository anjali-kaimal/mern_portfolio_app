const mongoose = require("mongoose");

// intro schema for the intro section to make it dynamic
const introSchema = new mongoose.Schema({
  welcomeText: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

// about section
const aboutSchema=new mongoose.Schema({
    lottieURL:{
        type:String,
        required:true
    },
    description1:{
        type:String,
        required:true
    },
    description2:{
        type:String,
        required:true
    },
    skills:{
        type:Array,
        required:true
    },
});

// work experience
const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

// mern projects
const mernProjectSchema=new mongoose.Schema({
    photourl:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    giturl:{
        type:String,
        required:true
    },
    liveurl:{
        type:String,
        required:true
    },
});

// mini projects
const miniProjectSchema=new mongoose.Schema({
    photourl:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    giturl:{
        type:String,
        required:true
    },
    liveurl:{
        type:String,
        required:true
    },
});

// certifications
const certificationSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    org:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
});

// contact
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

// make sure model name is singular and collection name is plural
module.exports={
    Intro:mongoose.model("intros",introSchema),
    About:mongoose.model("abouts",aboutSchema),
    Experience:mongoose.model("experiences",experienceSchema),
    MernProject:mongoose.model("mernprojects",mernProjectSchema),
    MiniProject:mongoose.model("miniprojects",miniProjectSchema),
    Certification:mongoose.model("certifications",certificationSchema),
    Contact:mongoose.model("contacts",contactSchema),

}