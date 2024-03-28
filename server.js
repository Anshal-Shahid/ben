const express = require("express")
const app = express()
const ejs = require("ejs")
const path = require("path")
const dotenv=require("dotenv")
dotenv.config()
const cors=require("cors")
const bodyParser=require("body-parser")
const {errorHandler}=require("./middlewares/errorHandler.js")
const {connectDB}=require("./configs/connectionDB.js")



connectDB()

app.use(cors())



//ejs
const templatePath = path.join(__dirname, "./tempelates")

app.set("view engine", "ejs")
app.set("views",templatePath)



//middleware
app.use(express.json())
app.use(bodyParser.urlencoded( { extended: false} ))
app.use(express.static(path.join(__dirname,"./public")));
app.use(errorHandler)


//routes
app.use("/",require("./routers/index.routes.js"))


//port

const port=process.env.PORT || 3000

app.listen(port,()=>{
    console.log( `app is running on ${port} port`);
})


