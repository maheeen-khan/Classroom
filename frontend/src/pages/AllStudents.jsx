import React, { useEffect, useState, useContext } from 'react'
import '../App.css'
import MyCard from '../components/MyCard'
import axios from 'axios'
import MyLayout from '../components/Navbar'
import { Table, Space, Tag, Button, Pagination } from 'antd';
import { EyeOutlined, EditOutlined, MinusCircleOutlined, UserOutlined, NumberOutlined, GroupOutlined, InteractionOutlined, EnvironmentOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const AllStudents = () => {

  const [filteredStudents, setFilteredStudents] = useState([]);
  const [showBackButton, setShowBackButton] = useState(false);
  const [student, setStudent] = useState([])


  const token = localStorage.getItem('token'); // retrieve token after login
  const backendHostedURL = "https://classroom-production-fd75.up.railway.app"

  const deleting = (id) => {

    
    const deleteStudent = async () => {
      const res = await axios.delete(`${backendHostedURL}/api/deleteStudent/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Deleted Student : ", res.data);
      toast.error("Student Deleted Successfully!");
    }

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        deleteStudent();
        Swal.fire({
          title: "Deleted!",
          text: "Student data has been deleted.",
          icon: "success"
        });
        setTimeout(() => {
    
    
          window.location.reload();
    
        }, 4000);

        
      }
    });


  }

  const columns = [
    {
      title: <span style={{ color: '#161179' }}><UserOutlined /> Student Name</span>,
      dataIndex: 'name',
      showSorterTooltip: { target: 'full-header' },
      style: {color: '#161179'},
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: <span style={{ color: '#161179' }}><NumberOutlined /> Roll No</span>,
      dataIndex: 'rollNo',
    },
    {
      title: <span style={{ color: '#161179' }}><GroupOutlined /> Class</span>, 
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
      title: <span style={{ color: '#161179' }}><EnvironmentOutlined /> Address</span>,
      dataIndex: 'Address',
     
    },
    {
      title:  <span style={{ color: '#161179' }}><InteractionOutlined /> Action</span>,
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
    setShowBackButton(filteredData.length === 0);
  };

  useEffect(() => {
 
    async function fetchData() {

      const myData = await axios.get(`${backendHostedURL}/api/students`,{
        
        headers: {
          Authorization: `Bearer ${token}`,
        },

      });
      console.log(myData.data);
      setStudent(myData.data)
      setFilteredStudents(myData.data);
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
              // pagination={false}
              pagination={{
                pageSize: 5,  // Show only 5 rows per page
                showSizeChanger: false, // Hide page size changer
                position: ['bottomCenter'], // Positions pagination at the bottom center
              }}
              scroll={{ x: "max-content" }}
            />

            {showBackButton && (
              <div style={{ textAlign: 'center', marginTop: 16 }}>
                <Button type="primary" onClick={backmove} style={{ marginBottom: 16 }}>
                  Back
                </Button></div>
            )}
           
          </>

          }



      </div>
    </MyLayout>
  )
}

export default AllStudents