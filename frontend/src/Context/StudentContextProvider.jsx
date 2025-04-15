import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentContext from "./StudentContext";

const StudentContextProvider = ({ children }) => {
  

  const [totalStudents, setTotalStudents] = useState(0);
  
  const token = localStorage.getItem('token'); // retrieve token after login


  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get("https://classroom-production-fd75.up.railway.app/api/students",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTotalStudents(res.data.length);
        
      } catch (error) {
        console.error("Error fetching students:", error);
        
      }
    };

    fetchStudents();
  }, []); // ✅ Called only once when Provider mounts


  // Function to increase count by 1 after adding
  const incrementStudentCount = () => {
    setTotalStudents(prev => prev + 1);
  };

  return (
    <StudentContext.Provider value={{totalStudents, incrementStudentCount}}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentContextProvider;
