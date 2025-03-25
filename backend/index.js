import 'dotenv/config'
import express from 'express'
import cors from 'cors'
const app = express()
const port = process.env.PORT || 4000

// Enable CORS for frontend (http://localhost:5173)
app.use(cors());


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

app.get('/api/students', (req, res) => {
    res.send(stdData)
    })


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
    })