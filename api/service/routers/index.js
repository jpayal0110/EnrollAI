import studentRouter from "./student-router.js";

const initializeRoutes = (app) => {
    app.use('/students', studentRouter);
    //app.use('/courseEnrollments', courseEnrollmentRouter);
}

export default initializeRoutes;