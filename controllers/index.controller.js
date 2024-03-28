const mongoose=require("mongoose")
const asyncHandler=require( "express-async-handler");



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


module.exports= {index,books,contact,about,speaking}