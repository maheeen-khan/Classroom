import React from 'react';
import { Card } from 'antd';
import { EyeOutlined, EditOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

const MyCard = (props) => (
  <Card
    title={props.name}
    className='card'
    variant="border"
    style={{
      width: 300,
      backgroundColor:'#eaf2c3',
      boxShadow:'none'
    }}
    // p={2}
    extra={[<Link to={`/view-student/${props.id}`} style={{ marginRight: '10px', color:'#27667B' }}><EyeOutlined /> </Link>,
       <Link to={'/update'} style={{ marginRight: '10px', color:'#27667B' }}><EditOutlined /></Link>, 
       <Link to={'/delete'} style={{color:'#27667B'}}><MinusCircleOutlined /></Link>]}
  >

    <p>Roll no: <span className='bold'>{props.rollno}</span></p>
    <p>Class: {props.grade}</p>
    {/* <p>Email: {props.mail}</p> */}
    {/* <p>{props._id}</p> */}

  </Card>
);
export default MyCard;