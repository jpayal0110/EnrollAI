import * as studentService from "./../services/student-service.js";
import { setSuccess, setError } from "./response-handler.js";

export const post = async (request, response) => {
    try{
        const newStudent = {...request.body};
        const student = await studentService.save(newStudent);
        //response.status(200);
        //response.json(student);
        setSuccess(student, response);
    }
    catch(error) {
        setError(error, response);
    }
}