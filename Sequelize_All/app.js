require("dotenv").config();
const Sequelize = require("sequelize");
const express = require("express");

const app = express();
const db = new Sequelize(process.env.DATABASE_URL);

const Student = db.define("student", {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
});
  
const Course = db.define("course", {
    course_name: Sequelize.STRING,
    course_code: Sequelize.STRING,
});
  
Student.belongsToMany(Course, { through: "StudentCourses" });
Course.belongsToMany(Student, { through: "StudentCourses" });

(async () => {
  try {
    await db.sync();
    console.log("Models synced with database");
  } catch (error) {
    console.error(error);
  }
})();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// 

app.get("/students", async (req, res) => {
    try {
      const students = await Student.findAll();
      res.json(students);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
});
  
app.post("/students", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
  
// courses
app.get("/courses", async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/courses", async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 2005;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});