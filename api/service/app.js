import mongoose from "mongoose";
import cors from "cors";
import initializeRoutes from "./routers/index.js";
import express from "express";

const initialize = (app) => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded());
    initializeRoutes(app);
    mongoose.connect(process.env.MONGO_CONNECTION);
    initializeRoutes(app);
}

export default initialize;
