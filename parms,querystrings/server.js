const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

  app.get("/countriesList",async(req,res)=>{
 let countriesList = await Employee.find().distinct("country");

 return res.json(countriesList);
});

  app.get("/departmentList",async(req,res)=>{
    let departmentList = await Employee.find().distinct("department");
   
    return res.json(departmentList);
   });

   app.get("/genderList",async(req,res)=>{
    let genderList = await Employee.find().distinct("gender");
   
    return res.json(genderList)
   });

   app.get("/ageList",async(req,res)=>{
    let ageList = await Employee.find().distinct("age");
   
    return res.json(ageList);
   });

   app.get("/salaryList",async(req,res)=>{
    let salaryList = await Employee.find().distinct("salary");
   
    return res.json(salaryList);
   });

   app.get("/firstNameList",async(req,res)=>{
    let firstNameList = await Employee.find().distinct("firstName");
   
    return res.json(firstNameList);
   })

app.get("/employees",async(req,res)=>{
    console.log(req.query);
  
    let employeesArr = await Employee.find().and([
        {country:req.query.country},
        {department:req.query.department},
        {gender:req.query.gender},
        {age:req.query.age},
        {salary:req.query.salary},
        {firstName:req.query.firstName},
    ]);
    //.distinct("department")
    // .select(
    //     "firstName lastName department country"
    // )
    //.sort("age");
    // .and([
    //     {country :"Russia"},
    //     {gender:"Male"},
    //     {age:{$gte : 21,$lte : 65}}
    // ])
    //.limit(20).skip(300);
    
   res.json(employeesArr);
});


app.get("/employees/:country/:department/:gender/:age/:salary/:firstName",async(req,res)=>{
    console.log(req.params);
  
    let employeesArr = await Employee.find().and([
        {country:req.params.country},
        {department:req.params.department},
        {gender:req.params.gender},
        {age:req.params.age},
        {salary:req.params.salary},
        {firstName:req.params.firstName},
    ]);    
   res.json(employeesArr);
});



app.listen(1234,()=>{
    console.log("Listening to port 1234");
})

let employeeSchema = new mongoose.Schema({

id:Number,
firstName:String,
lastName:String,
email:String,
gender:String,
age:Number,
department:String,
profilePic:String,
salary:Number,
country:String,
});

let Employee = new mongoose.model("employee",employeeSchema,"employess");


let connectToMDB = async ()=> {

    try{
        mongoose.connect("mongodb+srv://vivekaleti:vivekaleti@vivek.wwjla.mongodb.net/tata?retryWrites=true&w=majority&appName=vivek")
       
        console.log("successfully connected to MDB");
    
    
    }catch(err){
         console.log("Unable to Connect to MDB");
    }

};

connectToMDB();
