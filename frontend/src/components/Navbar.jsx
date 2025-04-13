import React, {useContext} from 'react';
import { Layout, Menu, theme, Button } from 'antd';
const { Header, Content, Footer } = Layout;
import { Link, useLocation } from 'react-router-dom';
import { SearchOutlined, UserAddOutlined, CaretDownOutlined, LogoutOutlined } from '@ant-design/icons';
import StudentContext from '../Context/StudentContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const MyLayout = ({children}) => {
  const location = useLocation(); // Get the current path
  const { totalStudents} = useContext(StudentContext);
  const navigate = useNavigate(); 
  // Logout functionality

  const logout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You will be logged out!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout',
    }).then((result) => {
      if (result.isConfirmed) {
        
        Swal.fire('Logged out!', 'You have been successfully logged out.', 'success').then(() => {
          navigate('/'); // Redirect to the login page
          localStorage.removeItem('token');
        });
      }
    });
  };

  
  const items = [
    { key: "1", label: <Link to="/add-student"><UserAddOutlined /> Add Student</Link> },
    { key: "2", label: <Link to="/allStudents"><CaretDownOutlined /> All Students</Link> },
    { key: "3", label: <Link to="/search"><SearchOutlined /> Search</Link> },
    {key: '4', label: "Total Students : "+ totalStudents},
    {key: '5', label: <Button type="primary" icon={<LogoutOutlined />} onClick={logout}> Logout</Button>},
  ];

  // Map pathname to Menu keys
  const getSelectedKeys = () => {
    if (location.pathname === "/add-student") return ["1"];
    if (location.pathname === "/allStudents") return ["2"];
    if (location.pathname === "/search") return ["3"];
    return [];
  };
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#161179',
        }}
      >
        <div className="demo-logo" />
        <h1 className='logo'>Classroom</h1>

        <div style={{ marginLeft: 'auto' }}>

        <Menu
          theme="dark"
          mode="horizontal"
          className='menu'
          defaultSelectedKeys={['2']}
          selectedKeys={getSelectedKeys()} // Dynamically update selected key
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
            backgroundColor: '#161179',
          }}
        />

        </div>
      </Header>
      <Content
        style={{
          padding: '0 18px',
          marginTop: '27px',
        }}
      >
     
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
          color: 'grey'
        }}
      >
        Classroom <span style={{color:'red'}}>©{new Date().getFullYear()}</span> Created by Maheen Khan
      </Footer>
    </Layout>
  );
};
export default MyLayout;