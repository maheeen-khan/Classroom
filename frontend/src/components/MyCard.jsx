import React from 'react';
import { Card } from 'antd';
import { EyeOutlined, EditOutlined, UserDeleteOutlined } from '@ant-design/icons';
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
    extra={[<Link to={'/view-student'}><EyeOutlined /> </Link>, <Link to={'/update'}><EditOutlined /></Link>, <Link to={'/delete'}><UserDeleteOutlined /></Link>]}
  >

    <p>Roll no: <span className='bold'>{props.rollno}</span></p>
    <p>Class: {props.grade}</p>
    <p>Email: {props.mail}</p>


  </Card>
);
export default MyCard;