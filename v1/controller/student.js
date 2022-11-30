const hash = require("../../services/hash");
const models = require("../../models/index");
const services = require("../../services/hash");
const bcrypt = require("bcrypt");

//create student
async function createStudent(req, res, next) {
  try {
    console.log(req.body, "zxcvbbnmm");
    req.body.password = await hash.securepassword(req.body.password);
    const student = await models.studentmodels.create(req.body);

    if (student) {
      return res.status(500).send({
        message: "user  create not succesfully",
        data: student,
      });
    }
    return res.status(200).send({
      message: "user  created successfully",
      data: {},
    });
  } catch (e) {
    next(e);
  }
}

// async function createUser(req, res, next) {
//     try {
//         //req.body.password = await hashed.hashPassword(req.body.password)
//         console.log(req.body,"dfjbdhufbudfhudvfhudf");
//         const data = await models.create(req.body)//.save();
//         if (data) {
//             return res.status(200).send({
//                 message: "user created successfully",
//                 data: data
//             })
//         }
//         return res.status(400).send({
//             message: "somthing went wrong",
//             data: {}
//         })
//     }catch (error) {
//         next(error)
//     }}

// log in user
// async function LoginStudent(req, res, next) {
//   const { error } = validate(req.body);
//   if (error) {
//     return res.status(400).send(error.details[0].message);
//   }

//   // Check if this user already exisits
//   let student = await User.findOne({ email: req.body.email });
//   if (user) {
//     return res.status(400).send("That user already exisits!");
//   } else {
//     // Insert the new user if they do not exist yet
//     student = new User({
//       name: req.body.name,
//       email: req.body.email,
//       password: req.body.password,
//     });

//     await user.save();
//     res.send(student);
//   }
// }

async function LoginStudent(req, res) {
  const body = req.body;
  console.log(req.body, "hello");

  const student = await models.studentmodels.findOne({ email: body.email });

  console.log("---------------------------------------");
  console.log(student);
  console.log("---------------------------------------");
  console.log("---------------------------------------");

  console.log(body);
  console.log("---------------------------------------");

  if (student) {
    // check user password with hashed password stored in the database
    console.log("ma yhan hun");
    let validPassword = bcrypt.compare(body.password, student.password);

    if (validPassword) {
      res.send("Valid password");
    } else {
      res.send("InValid password");
    }
  } else {
    res.send("User does not exist");
  }
}

module.exports = { createStudent, LoginStudent };

/*const validation = require('../validation/index');
const service = require('../../services/index');
const model = require('../../models/index');
const bcrypt=require("bcryptjs");



async function createDriver(req,res,next)
{
    try{
        const salt=await bcrypt.genSalt()
        const hashPassword=await bcrypt.hash(req.body.password,salt)
        // console.log(salt)
        // console.log(hashPassword);
        const checkEmail= await model.userModel.findOne({
            email:req.body.email
        })
        if(checkEmail !=null){

            throw "Email aiready exist"
        }
        const user=await model.driverModel({
            driverName:req.body.driverName,
            email:req.body.email,
            password:hashPassword

        }).save();
        //users.push(user);
        //return res.status(201).send({
        return res.status(201).send({
            message:"create sucessfull",
            data:driver

        })

    }
    catch (error){
        // console.log(error);
        //   res.status(500)({
        //     message:"password are not hashed"
            next(error)
        
    }}
     //log in user
    async function LogInDriver(req,res,next) { 
      //const LogInDriver =async(req,res,next)=>{
          try{
              console.log(req.body);
              const{ email,password}=req.body;
              const isUser=await model.driverModel.findOne({email:email});
              if(!isUser){
                  return res.send({
                      message:"driver not found"
                  })
              }
          
          
             //compare driver
              const result =await bcrypt.compare(password, isDriver.password);
  
              if(result === true){
                  return res.send({
                      message:"login sucessfully",
                      data:isDriver
                  })
              }
              else{
                  return res.json({
                      message:" incorrect password"
                  })
              }
              } catch(error){
                  console.log(error);
  
              }
             module.exports={
              LogInDriver,
              createDriver
          }
      }
      
    
*/
