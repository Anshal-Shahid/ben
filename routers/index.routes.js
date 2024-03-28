const express=require("express")
const router=express.Router()
const {index,books,contact,about,speaking}=require("../controllers/index.controller.js")


router.get("/",index)
router.get("/books",books)
router.get("/contact",contact)
router.get("/about",about)
router.get("/speaking",speaking)

module.exports=router