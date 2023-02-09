const { response } = require('express')
const Student = require('../models/Student')


const getStudents = (req, res, next) => {
    Student.find()
        .then(response => {
            let entries=[];
           let data= response.map(st=>entries.push(st.entries));
            res.json({
                data
            })
        })
        .catch(error => {
            res.json({
                message: 'An error Occured'
            })
        })
}

const createStudent = (req, res, next) => {

    let student = new Student({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        displayName: req.body.displayName,
        municipality: req.body.municipality,
        WorksnapsTimeEntry: {
            student: req.body.student,
            time_entries: req.body.time_entries
        }
    })
    console.log(student)
    student.save()
        .then(response => {
            res.json({
                message: 'Student Added Successfully'
            })
        })
        .catch(error => {
            res.json({
                message: 'An error occured'
            })
        })
}
module.exports = {
    getStudents, createStudent
}
