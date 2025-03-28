import React, { useEffect, useState } from 'react'
import '../App.css'
import MyCard from '../components/MyCard'
import axios from 'axios'
import MyLayout from '../components/Navbar'
import { Table, Space, Tag, Button } from 'antd';
import { EyeOutlined, EditOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AllStudents = () => {

  const [student, setStudent] = useState([])
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [showBackButton, setShowBackButton] = useState(false);
  const navigate = useNavigate();


  const deleting = (id) => {
    const deleteStudent = async () => {
      const res = await axios.delete(`http://localhost:3000/api/deleteStudent/${id}`);
      console.log("Deleted Student : ", res.data);
      toast.error("Student Deleted Successfully!");
    }
    deleteStudent();
    setTimeout(() => {


      window.location.reload();

    }, 4000);

  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      showSorterTooltip: { target: 'full-header' },

      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Roll No',
      dataIndex: 'rollNo',
      // defaultSortOrder: 'descend',
      // sorter: (a, b) => a.rollNo - b.rollNo,
    },
    {
      title: 'Class',
      dataIndex: 'Class',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.Class - b.Class,
      filters: [

        {
          text: '6',
          value: '6',
        },
        {
          text: '7',
          value: '7',
        },
        {
          text: '8',
          value: '8',
        },
        {
          text: '9',
          value: '9',
        },
        {
          text: '10',
          value: '10',
        },
      ],
      onFilter: (value, record) => record.Class.includes(value),

    },
    {
      title: 'Address',
      dataIndex: 'Address',
     
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/view-student/${record._id}`} style={{ color: '#27667B' }}>
            <EyeOutlined />
          </Link>
          <Link to={`/update/${record._id}`} style={{ color: '#27667B' }}>
            <EditOutlined />
          </Link>
          <Link onClick={() => deleting(record._id)} style={{ color: '#27667B' }}>
            <MinusCircleOutlined />
          </Link>
        </Space>
      ),
    },
  ];

  const onChange = ( filters, sorter, extra) => {
    console.log('params', filters, sorter, extra);
    const filteredData = student.filter(student => {
      return (!filters.Class || filters.Class.length === 0 || filters.Class.includes(student.Class));
    });

    setFilteredStudents(filteredData);
    setShowBackButton(filteredData.length === 0); // Show back button if no data matches
  };


  useEffect(() => {

    async function fetchData() {

      const myData = await axios.get('http://localhost:3000/api/students')
      console.log(myData.data);
      setStudent(myData.data)
    }
    fetchData();

  }, [])

  const backmove = () => {
    window.location.reload();

  };
  return (
    <MyLayout>
      <div className="" style={{ position: 'relative' }}>
        {student.length === 0 ?
          <div className="cont">
            <div className="spinner" >

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
            </div></div>
          : <>

            <Table
              columns={columns}
              dataSource={student}
              onChange={onChange}
              showSorterTooltip={{ target: 'sorter-icon' }}
              pagination={false}

            />

            {showBackButton && (
              <div style={{ textAlign: 'center', marginTop: 16 }}>
                <Button type="primary" onClick={backmove} style={{ marginBottom: 16 }}>
                  Back
                </Button></div>
            )}
          </>}



      </div>
    </MyLayout>
  )
}

export default AllStudents