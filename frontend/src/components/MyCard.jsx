import React from 'react';
import { Card } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

const MyCard = (props) => (
  <Card
    title={props.name}
    className='card'
    variant="border"
    style={{
      width: 300,
    }}
    // p={2}
    extra={<Link to={'/update'}><EyeOutlined /> </Link> }
  >

    <p>Roll no: <span className='bold'>{props.rollno}</span></p>
    <p>Class: {props.grade}</p>
    <p>Email: {props.mail}</p>


  </Card>
);
export default MyCard;