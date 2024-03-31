const mongoose=require("mongoose")
const asyncHandler=require( "express-async-handler");
const nodemailer = require('nodemailer');



const index=asyncHandler( async(req,res)=>{
    res.render("index.ejs");
})
const books=(req,res)=>{
    res.render("books.ejs")
}
const contact=(req,res)=>{
    res.render("contact.ejs")
}
const about=(req,res)=>{
    res.render("about.ejs")
}
const speaking=(req,res)=>{
    res.render("speaking.ejs")
}
const coaching=(req,res)=>{
    res.render("coaching.ejs")
}


const form = async(req, res) => {
    const { name, email, subject, message } = req.body;

    // Create a transporter object using SMTP
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port:587,
        auth: {
            user: 'drmuellersvoice@gmail.com',
            // pass: 'njfcfkchlchvbdpi'  // ryan key
            pass:'apwafeeddebknyvv'  // cr ben key
        }
    });
    

    // Email options
    const info = await transporter.sendMail({
        from: `"${name}"`,
        to: "drmuellersvoice@gmail.com", // list of receivers
        subject: `${name}`, // Subject line
        text: `${message}`, // plain text body
        html: `<b>Subject:${subject}</b> 
        <br><br> ${message}`, // html body
      });
      console.log("Message sent: %s", info.messageId);
      res.redirect("/contact")
};

module.exports= {index,books,contact,about,speaking,coaching,form}