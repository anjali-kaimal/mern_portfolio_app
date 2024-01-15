const router = require("express").Router();

// import the models
const {
  Intro,
  About,
  Experience,
  MernProject,
  MiniProject,
  Certification,
  Contact,
} = require("../models/portfolioModel");

const User=require("../models/userModel")
// writing the API

// Get all portfolio data
router.get("/get-portfolio-data", async (req, res) => {
  // whenever frontend wants the data, it will pull it from mongoDB
  try {
    const intros = await Intro.find();
    const about = await About.find();
    const experience = await Experience.find();
    const mernprojects = await MernProject.find();
    const miniprojects = await MiniProject.find();
    const certifications = await Certification.find();
    const contacts = await Contact.find();

    // send the response
    res.status(200).send({
      intro: intros[0],
      about: about[0],
      experience: experience,
      mernprojects: mernprojects,
      miniprojects: miniprojects,
      certifications: certifications,
      contact: contacts[0],
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update intro
// here we will find using _id property which we will get from frontend itself

router.post("/update-intro",async (req, res) => {
  try {
    const intro= await Intro.findOneAndUpdate(
      {_id:req.body._id},
      req.body,
      {new:true}
    );

    // if success, we will display success message
    res.status(200).send(
     { data:intro,
      success:true,
      message: "Intro updated successfully!"}
    );
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update about
router.post("/update-about",async (req, res) => {
  try {
    const about= await About.findOneAndUpdate(
      {_id:req.body._id},
      req.body,
      {new:true}
    );

    // if success, we will display success message
    res.status(200).send(
     { data:about,
      success:true,
      message: "About Section updated successfully!"}
    );
  } catch (error) {
    res.status(500).send(error);
  }
});

// update experiences
router.post("/update-experience",async (req, res) => {
  try {
    const experience= await Experience.findOneAndUpdate(
      {_id:req.body._id},
      req.body,
      {new:true}
    );

    // if success, we will display success message
    res.status(200).send(
     { data:experience,
      success:true,
      message: "Experience Section updated successfully!"}
    );
  } catch (error) {
    res.status(500).send(error);
  }
});

// add experiences
router.post("/add-experience",async (req, res) => {
  try {
    const experience= new Experience(req.body);
    await experience.save();

    // if success, we will display success message
    res.status(200).send(
     { data:experience,
      success:true,
      message: "Experience Added successfully!"}
    );
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete experience
router.post("/delete-experience",async (req, res) => {
  try {
    const experience= await Experience.findOneAndDelete(
      {_id:req.body._id},
      req.body,
      {new:true}
    );

    // if success, we will display success message
    res.status(200).send(
     { data:experience,
      success:true,
      message: "Experience Section deleted successfully!"}
    );
  } catch (error) {
    res.status(500).send(error);
  }
});

// update mern projects
router.post("/update-mernprojects",async (req, res) => {
  try {
    const mernprojects= await MernProject.findOneAndUpdate(
      {_id:req.body._id},
      req.body,
      {new:true}
    );

    // if success, we will display success message
    res.status(200).send(
     { data:mernprojects,
      success:true,
      message: "Mern Project updated successfully!"}
    );
  } catch (error) {
    res.status(500).send(error);
  }
});

// add MERN Project
router.post("/add-mernprojects",async (req, res) => {
  try {
    const mernprojects= new MernProject(req.body);
    await mernprojects.save();

    // if success, we will display success message
    res.status(200).send(
     { data:mernprojects,
      success:true,
      message: "MERN Project Added successfully!"}
    );
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete MERN Project
router.post("/delete-mernprojects",async (req, res) => {
  try {
    const mernprojects= await MernProject.findOneAndDelete(
      {_id:req.body._id},
      req.body,
      {new:true}
    );

    // if success, we will display success message
    res.status(200).send(
     { data:mernprojects,
      success:true,
      message: "MERN Project deleted successfully!"}
    );
  } catch (error) {
    res.status(500).send(error);
  }
});

// update mini projects
router.post("/update-miniprojects",async (req, res) => {
  try {
    const miniprojects= await MiniProject.findOneAndUpdate(
      {_id:req.body._id},
      req.body,
      {new:true}
    );

    // if success, we will display success message
    res.status(200).send(
     { data:miniprojects,
      success:true,
      message: "Mini Project updated successfully!"}
    );
  } catch (error) {
    res.status(500).send(error);
  }
});

// add mini Project
router.post("/add-miniprojects",async (req, res) => {
  try {
    const miniprojects= new MiniProject(req.body);
    await miniprojects.save();

    // if success, we will display success message
    res.status(200).send(
     { data:miniprojects,
      success:true,
      message: "Mini Project Added successfully!"}
    );
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete mini Project
router.post("/delete-miniprojects",async (req, res) => {
  try {
    const miniprojects= await MiniProject.findOneAndDelete(
      {_id:req.body._id},
      req.body,
      {new:true}
    );

    // if success, we will display success message
    res.status(200).send(
     { data:miniprojects,
      success:true,
      message: "Mini Project deleted successfully!"}
    );
  } catch (error) {
    res.status(500).send(error);
  }
});

// update certifications
router.post("/update-certifications",async (req, res) => {
  try {
    const certifications= await Certification.findOneAndUpdate(
      {_id:req.body._id},
      req.body,
      {new:true}
    );

    // if success, we will display success message
    res.status(200).send(
     { data:certifications,
      success:true,
      message: "Certification updated successfully!"}
    );
  } catch (error) {
    res.status(500).send(error);
  }
});

// add certifications
router.post("/add-certifications",async (req, res) => {
  try {
    const certifications= new Certification(req.body);
    await certifications.save();

    // if success, we will display success message
    res.status(200).send(
     { data:certifications,
      success:true,
      message: "Certifications Added successfully!"}
    );
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete certifications
router.post("/delete-certifications",async (req, res) => {
  try {
    const certifications= await Certification.findOneAndDelete(
      {_id:req.body._id},
      req.body,
      {new:true}
    );

    // if success, we will display success message
    res.status(200).send(
     { data:certifications,
      success:true,
      message: "Certifications deleted successfully!"}
    );
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update contact details
router.post("/update-contact",async (req, res) => {
  try {
    const contact= await Contact.findOneAndUpdate(
      {_id:req.body._id},
      req.body,
      {new:true}
    );

    // if success, we will display success message
    res.status(200).send(
     { data:contact,
      success:true,
      message: "Contact details updated successfully!"}
    );
  } catch (error) {
    res.status(500).send(error);
  }
});

// admin login
router.post("/admin-login",async(req,res)=>{
  try {
    const user=await User.findOne({username:req.body.username,password:req.body.password});
    user.password="";
    if(user){
      res.status(200).send({
        data:user,
        success:true,
        message:"Login Successful!"
      });
    }
    else{
      res.status(200).send({
        data:user,
        success:false,
        message:"Invalid username or password"
      });
    }
  } catch (error) {
    res.status(200).send({
      success:false,
      message:"Invalid username or password"
    });
  }
})

module.exports=router;
