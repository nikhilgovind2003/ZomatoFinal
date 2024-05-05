// env variable
import dotenv from "dotenv"
dotenv.config()

// importing npm 
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import Auth from './Api/Auth/index.js';
// utilities
// import {s3Upload} from "../server/Utils/AWS/S3.js";
// Database
import connectDB from "./Schema/connections.js";
// Config 
import googleAuthConfig from "./config/google.config.js";
import routConfig from "./config/rout.config.js";
import passport from "passport";
import Resaturant from "./Api/Restourant/index.js";
import Foods from "./Api/Food/index.js"
import Menus from "./Api/Menu/index.js"
import Images from "./Api/image/index.js"
import User from "./Api/User/index.js"
import Reviews from "./Api/Reviews/index.js"
const zomato = express();


// Middlewarees
zomato.use(express.json());
zomato.use(cors());
zomato.use(helmet());
zomato.use(express.urlencoded({extended: false}));
googleAuthConfig(passport)
routConfig(passport)
zomato.use(passport.initialize())
zomato.use(passport.session())
zomato.use("/auth", Auth);
zomato.use("/restaurant", Resaturant);
zomato.use("/foods", Foods);
zomato.use("/menus", Menus);
zomato.use("/images", Images);
zomato.use("/users", User)
zomato.use("/reviews", Reviews)


zomato.get("/", (req, res) =>[
    res.json({message: "server connected"})
])



zomato.connect("mongodb://0.0.0.0/user");
const conn = mongoose.connection;
conn.once("open", () => {
  console.log("connected successfully");
});



zomato.listen(4000, () => {
    console.log(`Server statrts and running at port 3000`);
  })
