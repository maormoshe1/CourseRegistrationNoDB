import cors from "cors";
import express from "express";
import user from "./Data/user";
import coursesRouter from "./Routes/courses";
import takenCoursesRouter from "./Routes/TakenCourses";

const app = express();
app.use(cors());
//parse data
app.use(express.json());

app.use("/api/courses", coursesRouter);

app.use("/api/takenCourses", takenCoursesRouter);

//get user
app.get("/api/user", (req, res) => {
  res.json(user);
});

app.listen(5000, () => {
  console.log("server is listening..");
});
