import express from "express";
import Hello from "./hello.js";
import Lab5 from "./Lab5/index.js";
import PathParameters from "./Lab5/PathParameters.js";
import QueryParameters from "./Lab5/QueryParameters.js";
import WorkingWithObjects from "./Lab5/WorkingWithObjects.js";
import WorkingWithArrays from "./Lab5/WorkingWithArrays.js";
import SessionController from "./Lab5/SessionController.js";
import cors from "cors";
import session from "express-session";
import "dotenv/config";
import UserRoutes from "./Kambaz/Users/routes.js";
import CourseRoutes from "./Kambaz/Courses/routes.js";
import ModuleRoutes from "./Kambaz/Modules/routes.js";
import AssignmentRoutes from "./Kambaz/Assignments/routes.js";
import EnrollmentRoutes from "./Kambaz/Enrollments/routes.js";


const app = express();

app.use(cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:5173",
  }
));

const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kambaz",
    resave: false,
    saveUninitialized: false,
    cookie: {
      sameSite: "lax",   
      secure: false      
  }
  };

if (process.env.NODE_ENV !== "development") { // if not running locally
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: process.env.NODE_SERVER_DOMAIN,
    };
  }

app.use(session(sessionOptions));
app.use(express.json());
  

Hello(app);
Lab5(app);
PathParameters(app);
QueryParameters(app);
WorkingWithObjects(app);
WorkingWithArrays(app);
SessionController(app);

UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
EnrollmentRoutes(app);

app.listen(process.env.PORT || 4000);