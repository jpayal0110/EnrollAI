import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    firstName: {
        require: true,
        type: String
    },
    lastName: String,
    email: {
        require: true,
        type: String
    },
    gender: String
});
const StudentModel = mongoose.model('student', studentSchema);
export default StudentModel;
