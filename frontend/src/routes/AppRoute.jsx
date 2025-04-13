import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddStudent from '../pages/AddStudent.jsx'
import Search from '../pages/Search.jsx'
import UpdateStudent from '../pages/UpdateStudent.jsx'
import AllStudents from '../pages/AllStudents.jsx'
import Navbar from '../components/Navbar.jsx'
import ReadStudent from '../pages/ReadStudent.jsx'
import RegistrationForm from '../components/registrationForm.jsx'
import LoginForm from '../components/LoginForm.jsx'
// import PageNotFound from '../pages/PageNotFound.jsx'

const AppRoute = () => {
  // Check if the user is logged in by checking the token in localStorage
  const token = localStorage.getItem('token')
  const isLoggedIn = token !== "undefined" && token !== null && token !== "" && token !== "null";

  return (

      <Routes>
        <Route path="/register" element={isLoggedIn ? <AllStudents /> : <RegistrationForm/>}/>
        <Route path="/" element={isLoggedIn ? <AllStudents /> : <LoginForm/>}/>
        <Route path="/allStudents" element={isLoggedIn ? <AllStudents /> : <LoginForm/> } />
        <Route path="/add-student" element={isLoggedIn ? <Navbar><AddStudent /></Navbar> : <LoginForm/>} />
        <Route path="/search" element={isLoggedIn ? <Navbar><Search /></Navbar> : <LoginForm/>} />
        <Route path="/update/:id" element={isLoggedIn ? <Navbar><UpdateStudent /></Navbar> : <LoginForm/>} />
        <Route path="/view-student/:id" element={isLoggedIn ? <Navbar><ReadStudent/></Navbar> : <LoginForm/>}></Route>
        <Route path="/delete"></Route>

        {/* <Route path='*' element={<Navbar> <PageNotFound/> </Navbar>}></Route> */}

      </Routes>


  )
}

export default AppRoute