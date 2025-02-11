import { useEffect, useState } from 'react'
import './App.css'
import MyCard from './components/MyCard'
import axios from 'axios'

function App() {

  const [student , setStudent] = useState([])

  useEffect(()=>{

    async function fetchData() {
   
      const myData = await axios.get('http://localhost:3000/api/students')
      console.log(myData.data);
      setStudent(myData.data)
    }
    fetchData();
    
  },[])
  return (
    <>
    
      {student.map((value,index)=>(
        <MyCard key={index} name={value.name} rollno={value.rollNo} desc={value.description} />
      ))}
      

    </>
  )
}

export default App
