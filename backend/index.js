import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectToDB from './db/dbStudent.mjs'
import Student from './models/student.model.mjs'

connectToDB()

const app = express()
const port = process.env.PORT || 4000

app.use(cors());
app.use(express.json());

const stdData = [
    {
        name: "Maheen",
        rollNo: 26,
        email: "maheenkhan6@gmail.com",
        Class:"8"
    },
    {
        name: "Ashna",
        rollNo: 28,
        email: "ashna67@gmail.com",
        Class:"7"
    },
    {
        name: "Sarah",
        rollNo: 27,
        email: "sarahh86@gmail.com",
        Class:"9"
    },
    {
        name: "Olivia",
        rollNo: 29,
        email: "oliviaa45@gmail.com",
        Class:"10"
    },
    {
        name: "Daniel",
        rollNo: 31,
        email: "danielb34@gmail.com",
        Class:"6"
    },
    {
        name: "John",
        rollNo: 33,
        email: "johnn66@gmail.com",
        Class:"6"
    }
]

app.get('/api/students', async (req, res) => {
    try{
        const students = await Student.find()
        res.send(students)
    } catch (error) {
        res.status(400).send({error: err, status: 400 })
    }
})


app.post('/api/add-student', async (req, res) => {
    const data = await req.body
    const student = await Student.create(data)
    res.send(student)
    console.log(student)
})



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
    })