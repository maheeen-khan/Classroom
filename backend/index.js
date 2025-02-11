import 'dotenv/config'
import express from 'express'

const app = express()
const port = process.env.PORT || 4000

const stdData = [
    {
        name: "Maheen",
        rollNo: 26,
        description: "She is doing software engineering from University of Karachi."
    },
    {
        name: "Ashna",
        rollNo: 28,
        description: "She is very intelligent girl in Class 10th."
    },
    {
        name: "Sarah",
        rollNo: 27,
        description: "Passionate about science and loves experiments."
    },
    {
        name: "Olivia",
        rollNo: 29,
        description: "A bookworm who loves literature and poetry."
    },
    {
        name: "Daniel",
        rollNo: 31,
        description: "Enjoys coding and participates in hackathons."
    },
    {
        name: "John",
        rollNo: 33,
        description: "A diligent student who excels in mathematics."
    }
]

app.get('/api/students', (req, res) => {
    res.send(stdData)
    })


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
    })