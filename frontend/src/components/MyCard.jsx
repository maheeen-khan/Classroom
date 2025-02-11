import React from 'react';
import { Card } from 'antd';

const MyCard = (props) => (
  <Card
    title={props.name}
    variant="border"
    style={{
      width: 300,
    }}
  >

    <p>${props.rollno}</p>
    <p>${props.desc}</p>


  </Card>
);
export default MyCard;