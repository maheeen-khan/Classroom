import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import AddStudent from '../pages/AddStudent.jsx';
import Search from '../pages/Search.jsx';
import UpdateStudent from '../pages/UpdateStudent.jsx';
import AllStudents from '../pages/AllStudents.jsx';
import Navbar from '../components/Navbar.jsx';
import ReadStudent from '../pages/ReadStudent.jsx';
import RegistrationForm from '../components/registrationForm.jsx';
import LoginForm from '../components/LoginForm.jsx';
import PageNotFound from '../pages/PageNotFound.jsx';

const AppRoute = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, [location.pathname]); // re-check token on every route change

  return (
    <Routes>
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/" element={isLoggedIn ? <Navigate to="/allStudents" /> : <LoginForm />} />
      <Route path="/allStudents" element={isLoggedIn ? <AllStudents /> : <Navigate to="/" />} />
      <Route path="/add-student" element={isLoggedIn ? <Navbar><AddStudent /></Navbar> : <Navigate to="/" />} />
      <Route path="/search" element={isLoggedIn ? <Navbar><Search /></Navbar> : <Navigate to="/" />} />
      <Route path="/update/:id" element={isLoggedIn ? <Navbar><UpdateStudent /></Navbar> : <Navigate to="/" />} />
      <Route path="/view-student/:id" element={isLoggedIn ? <Navbar><ReadStudent /></Navbar> : <Navigate to="/" />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoute;
