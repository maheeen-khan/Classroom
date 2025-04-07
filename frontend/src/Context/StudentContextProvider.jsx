import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentContext from "./StudentContext";

const StudentContextProvider = ({ children }) => {
  
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/students");
        setStudents(res.data);
        
      } catch (error) {
        console.error("Error fetching students:", error);
        
      }
    };

    fetchStudents();
  }, []); // ✅ Called only once when Provider mounts

  const totalStudents = students.length;

  return (
    <StudentContext.Provider value={{ students, totalStudents}}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentContextProvider;
