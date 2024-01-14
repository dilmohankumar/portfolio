
require("dotenv").config();


const nodemailer=require("nodemailer");
const bodyParser = require("body-parser");
var express = require("express");
var app = express(); 
var project=require("./project.json");
var exphbs = require("express-handlebars");
var path = require("path");
const helpers = require("./helpers");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/public")));

app.set("views", path.join(__dirname, "views"));
app.engine(".hbs", exphbs.engine({
    extname: ".hbs",
    defaultLayout: false,
    helpers:require("./helpers")
}));

app.set("view engine", ".hbs");

app.get("/", function(req, res) {
    res.render("Home.hbs");
});
app.get("/contact", function(req, res) {
    res.render("contact.hbs",{submitted:"no"});
});

app.get("/work", function(req, res) {
    res.render("work.hbs",{project: project});
});
app.get("/about",function(req,res){
    res.render("about");
});
app.get("/project/:pid",function(req,res,next){
    console.log("log project id");
    console.log(req.params.pid);
    var pid=req.params.pid;
    var thisproject=project[pid.toString()];
    console.log(thisproject);
    res.render("project.hbs",{project:thisproject});
});

let transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    }
});

app.post("/contact",function(req,res,next){
    console.log("form uploaded");
    console.log(req.body);
    console.log(req.body.fullname);

    console.log(req.body.email);
    var note=req.body.note;
    var subject=req.body.subject;
    let mailOptions={
        from:"kdilmohan101@gmail.com",
        to:"kdilmohan01@gmail.com",
      
        text:req.body.note,
        html: "<b>Full Name</b>"+req.body.fullname+"<br> email</br>"+req.body.email+"<br><b>message</b></br>"+note
    };
    transporter.sendMail(mailOptions,function(err,data){
        if(err){
            console.log("error sending email.");
         
        }else{
            console.log("email sent");
            res.render("contact",{submitted:"yes"});
        }
    });
});

var port = process.env.PORT || 8080;
app.listen(port);
console.log("Started express and listening on port", port);