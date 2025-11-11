// require('dotenv').config({path : './env'})

import dotenv from "dotenv"
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({path : './.env'})

// console.log("ENV Loaded:", process.env.MONGODB_URI);
// console.log("PORT:", process.env.PORT);
// console.log("DB Name:", process.env.DB_NAME);

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch( (err) => {
    console.log("MONGODB connection error!", err);
})
















/*
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Application Error: ",error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port : ${process.env.PORT}`);
        })
        
    } catch (error) {
        console.error("ERROR: ",error)
        throw err
    }
})()*/