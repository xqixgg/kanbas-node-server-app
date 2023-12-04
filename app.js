import express from 'express';
import Hello from "./hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import mongoose from 'mongoose';
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import AssignmentRoutes from './assignments/routes.js';
import UserRoutes from "./users/routes.js";
import "dotenv/config";
import session from "express-session";

const app = express();
app.use(cors({
    credentials: true,
    origin: "https://astounding-hummingbird-d3f973.netlify.app",
  }
 ));
 const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
  };
  app.use(
    session(sessionOptions)
  );
  
app.use(express.json());
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas'

mongoose.connect(CONNECTION_STRING);
UserRoutes(app);

Hello(app)
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
Lab5(app)
app.listen(process.env.PORT || 4000);