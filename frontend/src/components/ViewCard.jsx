import React, { useState, useEffect } from 'react';
import { Card, Tag } from 'antd';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const ViewCard = (props) => {

  return (

      <Card title={props.name} variant="borderless" style={{ backgroundColor: '#eaf2c3'}} headStyle={{ color: '#161179', borderBottom: '1px solid rgb(165, 165, 165)', textAlign: 'center', fontSize:'22px', fontFamily:"Georgia" }}>

      <p className='update' style={{textAlign:'center'}}>{props.updatedAt == props.createdAt ? "" : <Tag color="geekblue">
        UPDATED
      </Tag>}</p>


      <p>Class : <span className='bold-text'>{props.Class ? props.Class : 'N/A'}</span></p>
      <p>Roll no: <span className=''>{props.rollNo ? props.rollNo : 'N/A'}</span></p>
      <p>Email: <span className=''>{props.email ? props.email : 'N/A'}</span></p>
      <p>Address : <span className=''>{props.Address ? props.Address : 'N/A'}</span> </p>
      <p>Enrolled at : <span className=''>{props.createdAt}</span></p>
    </Card>
  
  )
};
export default ViewCard;