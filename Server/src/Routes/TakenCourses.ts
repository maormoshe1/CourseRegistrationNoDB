import express from "express";
import user from "../Data/user";
import Course from "../Types/Course";

const takenCoursesRouter = express.Router();

//get taken courses
takenCoursesRouter.get("/", (req, res) => {
  res.json(user.takenCourses);
});

//add taken course
takenCoursesRouter.post("/", (req, res) => {
  const takenCourse: Course = req.body;
  user.takenCourses.push(takenCourse);
  res.send(takenCourse);
});

//delete taken course
takenCoursesRouter.delete("/:id", (req, res) => {
  const id: number = Number(req.params.id);
  user.takenCourses = user.takenCourses.filter(
    (takenCourse) => takenCourse.id !== id
  );
  res.sendStatus(204);
});

export default takenCoursesRouter;
