const express = require("express");
const router = express.Router();
const controller = require("../controller/student");

router.post("/create", controller.createStudent);
router.post("/login", controller.LoginStudent);
//router.post("/", controller.studentController.createStudent);
// router.get("/find", authmiddleware, controller.studentController.getStudent)
// router.get("/", controller.studentController.getAllStudent)
// router.put("/:id", controller.studentController.updateStudent)
// router.delete("/:id", controller.studentController.deleteStudent)
module.exports = router;
