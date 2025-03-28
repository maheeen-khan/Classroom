import React, { useState, useEffect } from 'react';
import { Card, Tag } from 'antd';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const ViewCard = () => {

  const [stdData, setstdData] = useState('');

  const { id } = useParams();
  const getStudent = async () => {
    try {
      const studentData = await axios.get(`http://localhost:3000/api/students/${id}`);
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

      <Card title={stdData.name} variant="borderless" style={{ backgroundColor: '#eaf2c3'}} headStyle={{ color: '#161179', borderBottom: '1px solid rgb(165, 165, 165)', textAlign: 'center', fontSize:'22px', fontFamily:"Georgia" }}>

      <p className='update'>{stdData.updatedAt == stdData.createdAt ? "" : <Tag color="geekblue">
        UPDATED
      </Tag>}</p>


      <p>Class : <span className='bold-text'>{stdData.Class ? stdData.Class : 'N/A'}</span></p>
      <p>Roll no: <span className=''>{stdData.rollNo ? stdData.rollNo : 'N/A'}</span></p>
      <p>Email: <span className=''>{stdData.email ? stdData.email : 'N/A'}</span></p>
      <p>Address : <span className=''>{stdData.Address ? stdData.Address : 'N/A'}</span> </p>
      <p>Enrolled at : <span className=''>{stdData.createdAt}</span></p>
    </Card>
    }
    </div>
 </>   
  )
};
export default ViewCard;