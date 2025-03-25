import React, { useEffect, useState } from 'react'
import '../App.css'
import MyCard from '../components/MyCard'
import axios from 'axios'
import MyLayout from '../components/Navbar'
const AllStudents = () => {
    const [student, setStudent] = useState([])

    useEffect(() => {
  
      async function fetchData() {
  
        const myData = await axios.get('http://localhost:3000/api/students')
        console.log(myData.data);
        setStudent(myData.data)
      }
      fetchData();
  
    }, [])
  return (
    <MyLayout>
    <div className="cont">
      {student.length === 0 && <div class="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>}
      {student.map((value, index) => (
        <MyCard key={index} name={value.name} rollno={value.rollNo} desc={value.description} grade={value.Class} mail={value.email} />
      ))}
    </div>
  </MyLayout>
  )
}

export default AllStudents