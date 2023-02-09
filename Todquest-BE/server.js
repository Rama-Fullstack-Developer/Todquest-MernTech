const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const getStudentRoute = require('./routes/student')

const app = express();

app.use(express.json())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

mongoose
    .connect('mongodb://localhost:27017/sms',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(() => console.log("MongoDB connected..."))
    .catch(err => console.log(err))





    
app.get('/', (req, res) => {
    res.send('Hello Worls !!!')
})
app.listen(3000, () => console.log('server running...'))

app.use('/api',getStudentRoute)