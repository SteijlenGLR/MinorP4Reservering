import { Router } from "https://deno.land/x/oak@v6.5.0/mod.ts";
import getStudenten from "./controllers/getStudenten.js";
import getStudentDetails from "./controllers/getStudentDetails.js";
import createStudent from "./controllers/createStudent.js";
import updateStudent from "./controllers/updateStudent.js";
import deleteStudent from "./controllers/deleteStudent.js";

const router = new Router();

router
    
    .get("/student/:studentNummer", getStudentDetails)
    .get("/studenten", getStudenten)
    .post("/student", createStudent)
    .put("/student/:studentNummer", updateStudent)
    .delete("/student/:studentNummer", deleteStudent);

export default router;