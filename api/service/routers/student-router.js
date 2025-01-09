import express from "express";
import * as studentController from "./../controllers/student-controller.js";

const router = express.Router();
router.route('/')
    .post(studentController.post);

export default router;

