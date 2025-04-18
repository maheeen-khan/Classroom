import React, { useState, useEffect } from 'react'
import ViewCard from '../components/ViewCard'
import { Card, Tag } from 'antd';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const ReadStudent = () => {

  const [stdData, setstdData] = useState('');

  const { id } = useParams();
  const getStudent = async () => {

    const token = localStorage.getItem('token'); // retrieve token after login
    try {
      const studentData = await axios.get(`https://classroom-production-fd75.up.railway.app/api/students/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setstdData(studentData.data);
    } catch (error) {
      console.log("Error in getting student data!", error);
    }

  }
  useEffect(() => {

    getStudent();

  }, [])
  return (
    <>
    
   <div className="cont" style={{ position: 'relative' }}>
       {stdData.length === 0 ? 
       
       <div class="spinner" >
   
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
     </div>
       
       :
        
       <ViewCard name={stdData.name} Class={stdData.Class} rollNo={stdData.rollNo} email={stdData.email} Address={stdData.Address} createdAt={stdData.createdAt} updatedAt={stdData.updatedAt} />
        
       }
       </div>
    
    </>
  )
}

export default ReadStudent