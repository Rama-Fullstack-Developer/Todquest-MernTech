const mongoose = require('mongoose');
const Schema = mongoose.Schema


const WorksnapsTimeEntry = [{
    student: {
        type: Schema.ObjectId,
        ref: 'Student'
    },
    time_entries: {
        type: Object
    }
}];

const StudentSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        default: ''
        // validate: [validateLocalStrategyProperty, 'Please fill in your first name']
    },
    lastName: {
        type: String,
        trim: true,
        default: ''
        // validate: [validateLocalStrategyProperty, 'Please fill in your last name']
    },
    displayName: {
        type: String,
        trim: true
    },
    municipality: {
        type: String
    },
    WorksnapsTimeEntry: WorksnapsTimeEntry,
})



const Student = mongoose.model('Student', StudentSchema)
module.exports = Student