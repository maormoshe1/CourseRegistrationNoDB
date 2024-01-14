import express from "express";
import courses from "../Data/courses";
import Course from "../Types/Course";

const coursesRouter = express.Router();

//get all courses
coursesRouter.get("/", (req, res) => {
  res.json(courses);
});

//add new course
coursesRouter.post("/", (req, res) => {
  const newCourse: Course = {
    id: courses.length + 1,
    name: req.body.courseName,
    dates: [req.body.courseDate],
    info: req.body.info
  }
  courses.push(newCourse);
  res.send(newCourse);
});

//add new date for specific course
coursesRouter.put("/:id", (req, res) => {
  const id: number = Number(req.params.id);
  const courseDate: Date = new Date(req.body.courseDate);
  const course: Course | undefined = courses.find((course) => course.id === id);
  if (course) {
    course.dates = [...course.dates, courseDate];
    res.send(course);
  } else {
    res.status(404).send("The course with the given ID was not found");
  }
});

export default coursesRouter;
