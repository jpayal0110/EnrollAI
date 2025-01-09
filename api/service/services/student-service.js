import Student from "./../models/student.js";

export const save = async (newStudent) => {
    const student = new Student(newStudent);
    return student.save();
}