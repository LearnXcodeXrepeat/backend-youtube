
// best Appraoch
import dotenv from "dotenv"
import connectDB from './db/index.js';
import { app } from './app.js'

const port = process.env.PORT || 9000

dotenv.config({
    path: './.env'
})
connectDB()
    .then(() => {
        app.on("error", (err) => {
            console.log("ERROR:: ", err);
        })
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });

    })
    .catch((error) => {
        console.error("MONGODB CONNECTION FAILED::", error);
        throw error;
    })

//Another Approach 
/*
import mongoose from 'mongoose';
import { DB_NAME } from './constants';

import express from "express"

const app = express()

    ; (async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
            app.on("error", (err) => {
                console.log("ERROR:: ", err);
            })
            app.listen(process.env.PORT || 3000, () => {
                console.log(`Server is running on port ${process.env.PORT || 3000}`);
            });
        } catch (error) {
            console.error("ERROR::", error);
            throw error;
        }
    })()
*/