const express=require("express")
const router=express.Router()
const {index,books,contact,about,speaking,coaching,form}=require("../controllers/index.controller.js")


router.get("/",index)
router.get("/books",books)
router.get("/contact",contact)
router.get("/about",about)
router.get("/speaking",speaking)
router.get("/coaching",coaching)
router.post("/contact",form)
module.exports=router