import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectToDB from './db/dbStudent.mjs'
import Student from './models/student.model.mjs'
import User from './models/user.model.mjs'

connectToDB()

const app = express()
const port = process.env.PORT || 4000

app.use(cors());
app.use(express.json());



app.get('/api/students', async (req, res) => {
    try{
        const students = await Student.find()
        res.send(students)
    } catch (error) {
        res.status(400).send({error: error, status: 400 })
    }
})

app.get('/api/students/:id', async (req, res) => {
    try{
        const student = await Student.findById(req.params.id)
        res.send(student)
    }catch (error) {
        res.status(400).send({error: error, status: 400 })
    }
})

// Find student by name 
app.get('/api/students/name/:name', async (req, res) => {
    try {
        const students = await Student.find({ name: { $regex: new RegExp(req.params.name, 'i') } }).lean();

        if (students.length === 0) {
            return res.status(404).json({ message: 'No students found' });
        }

        res.status(200).json(students);
        
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});

app.post('/api/addStudent', async (req, res) => {
    const data = await req.body
    const student = await Student.create(data)
    res.send(student)
    console.log(student)
})

app.patch('/api/updateStudent/:id', async (req, res) => {
    const updateData = await req.body
    const updateStudent = await Student.findByIdAndUpdate(req.params.id, updateData, {new: true})
    res.send(updateStudent)
    console.log("Student updated ", updateStudent)
})

app.delete('/api/deleteStudent/:id', async (req, res) => {
    const student = await Student.findByIdAndDelete(req.params.id)
    res.send(student)
    console.log("Student deleted ", student)
})

app.post('/register', async (req, res) => {
    const userData = req.body
    const newUser = await User.create(userData)
    res.send(newUser)
    console.log("User registered ", newUser)
})

app.post('/login', async (req, res) => {
    const loginUserData = req.body
    const loginUser = await User.findOne({ username: loginUserData.username, password: loginUserData.password })
    if (!loginUser) {
        return res.status(401).send({ message: "Invalid username or password" })
    }
    if (loginUser) {
        res.send(loginUser)
        console.log("User logged in ", loginUser)
    } else {
        res.status(401).send({ message: "Invalid username or password" })
    } 
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
    })