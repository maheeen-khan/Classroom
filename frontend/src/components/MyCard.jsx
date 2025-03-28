// import React from 'react';
// import { Card } from 'antd';
// import { EyeOutlined, EditOutlined, MinusCircleOutlined } from '@ant-design/icons';
// import { Link } from 'react-router-dom'
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const MyCard = (props) => {

//   const deleting = (id) => {
//     const deleteStudent = async () => {
//       const res = await axios.delete(`http://localhost:3000/api/deleteStudent/${id}`);
//       console.log("Deleted Student : ", res.data);
//       toast.error("Student Deleted Successfully!");
//     }
//     deleteStudent();
//     setTimeout(() => {

 
//       window.location.reload();
      
//     }, 4000);

//   }

//   return (

//     <Card
//       title={props.name}
//       className='card'
//       variant="border"
//       style={{
//         width: 300,
//         backgroundColor: '#eaf2c3',
//         boxShadow: 'none'
//       }}
//       // p={2}
//       extra={[<Link to={`/view-student/${props.id}`} style={{ marginRight: '10px', color: '#27667B' }}><EyeOutlined /> </Link>,
//       <Link to={`/update/${props.id}`} style={{ marginRight: '10px', color: '#27667B' }}><EditOutlined /></Link>,
//       <Link onClick={() => deleting(props.id)} style={{ color: '#27667B' }}><MinusCircleOutlined /></Link>]}
//     >
//       <p className='update'>{props.updated == props.created ? "" : "Updated"}</p>
//       <p>Roll no: <span className='bold'>{props.rollno}</span></p>
//       <p>Class: {props.grade}</p>
      


//     </Card>
//   )
// };
// export default MyCard;
import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    showSorterTooltip: { target: 'full-header' },
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
const MyCard = () => (
  <Table
    columns={columns}
    dataSource={data}
    onChange={onChange}
    showSorterTooltip={{ target: 'sorter-icon' }}
  />
);
export default MyCard;