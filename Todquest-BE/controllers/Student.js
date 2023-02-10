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
const createWorksnapsTimeEntry = (req, res, next) => {
try {
    var time_entries;
    const _addWorksnapsTimeEntry = Student.findByIdAndUpdate({
      '_id': req.params._sId,
    },
      {
        $push: {
          'WorksnapsTimeEntry': {
            'student': req.body.student,
            'time_entries': req.body.time_entries
          }
        }
      }, { new: true }
    );
    if (_addWorksnapsTimeEntry) {
        time_entries = { status: true, message: 'Success', data: _addWorksnapsTimeEntry };
    } else {
        time_entries = { status: false, message: 'Time_entries added failed' };
    }
    return time_entries;
  }
  catch (e) {
    console.log(e);
    next();
  }
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
    getStudents, createStudent,createWorksnapsTimeEntry
}
