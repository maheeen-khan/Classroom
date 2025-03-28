import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddStudent from '../pages/AddStudent.jsx'
import Search from '../pages/Search.jsx'
import UpdateStudent from '../pages/UpdateStudent.jsx'
import AllStudents from '../pages/AllStudents.jsx'
import Navbar from '../components/Navbar.jsx'
import ReadStudent from '../pages/ReadStudent.jsx'
const AppRoute = () => {
  return (

      <Routes>
        <Route path="/" element={<AllStudents />} />
        <Route path="/add-student" element={<Navbar><AddStudent /></Navbar>} />
        <Route path="/search" element={<Navbar><Search /></Navbar>} />
        <Route path="/update/:id" element={<Navbar><UpdateStudent /></Navbar>} />
        <Route path="/view-student/:id" element={<Navbar><ReadStudent/></Navbar>}></Route>
        <Route path="/delete"></Route>
      </Routes>


  )
}

export default AppRoute