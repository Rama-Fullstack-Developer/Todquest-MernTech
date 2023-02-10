const express = require('express')
const router = express.Router()

const Student = require('../controllers/Student')


router.get('/getStudentList', Student.getStudents)
router.post('/create',Student.createStudent)
router.put('/createTimeEntry/:id',Student.createWorksnapsTimeEntry)




module.exports = router
