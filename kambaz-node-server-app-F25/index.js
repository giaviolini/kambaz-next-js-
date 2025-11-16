import "dotenv/config";
import express from 'express'
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import UserRoutes from "./Kambaz/Users/routes.js";
import CourseRoutes from "./Kambaz/Courses/routes.js";
import session from "express-session";
import ModuleRoutes from "./Kambaz/Modules/routes.js";
import "dotenv/config";
const app = express();
UserRoutes(app);
app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:4000",})); 
const sessionOptions = {
        secret: process.env.SESSION_SECRET || "kambaz",
        resave: false,
        saveUninitialized: false,
      };
      if (process.env.SERVER_ENV !== "development") {
        sessionOptions.proxy = true;
        sessionOptions.cookie = {
          sameSite: "none",
          secure: true,
          domain: process.env.SERVER_URL,
        };
      }
app.use(cors());
app.use(session(sessionOptions));     
app.use(express.json());
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
Hello(app)
Lab5(app);
app.listen(process.env.PORT || 4000)
