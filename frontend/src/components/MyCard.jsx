import React from 'react';
import { Card } from 'antd';

const MyCard = (props) => (
  <Card
    title={props.name}
    className='card'
    variant="border"
    style={{
      width: 300,
      textAlign: 'center',
    }}
  >

    <p>Roll no: <span className='bold'>{props.rollno}</span></p>
    <p>{props.desc}</p>


  </Card>
);
export default MyCard;