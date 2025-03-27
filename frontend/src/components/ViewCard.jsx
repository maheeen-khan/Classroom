import React, {useState, useEffect} from 'react';
import { Card } from 'antd';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const ViewCard = () => {

  const [stdData, setstdData] = useState('');

  const {id} = useParams();
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
  

  return(
  <Card title={stdData.name} variant="borderless" style={{  backgroundColor: '#eaf2c3', textAlign:'center'}}>
    
    
    <p>Class : {stdData.Class ? stdData.Class : 'N/A'}</p>
    <p>Roll no: {stdData.rollNo ? stdData.rollNo : 'N/A'}</p>
    <p>Email: {stdData.email ? stdData.email : 'N/A'}</p>
    <p>Address : {stdData.Address ? stdData.Address : 'N/A'} </p>
    <p>Enrolled at : {stdData.createdAt}</p>
  </Card>
  )
};
export default ViewCard;