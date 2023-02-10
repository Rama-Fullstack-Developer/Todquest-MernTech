const { response } = require('express')
const Student = require('../models/Student')


const getStudents = (req, res, next) => {
    Student.find()
        .then(response => {
            let entries = [];
            let data = response.map(st => entries.push(st.entries));
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
const createWorksnapsTimeEntry = (req, res, next) => {
    console.log(req.params.id)
    Student.findByIdAndUpdate({
        '_id': req.params.id,
    },
        {
            $push:
            {
                'WorksnapsTimeEntry': {
                    'student': req.body.student,
                    'time_entries': req.body.time_entries
                }
            }
        }, { new: true }
    );
    res.json({
        message: 'Student entries Added Successfully',
    })
}

const createStudent = (req, res, next) => {

    let student = new Student({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        displayName: req.body.displayName,
        municipality: req.body.municipality,
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
    getStudents, createStudent, createWorksnapsTimeEntry
}
