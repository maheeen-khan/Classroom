import React from 'react';
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;
import { Link, useLocation } from 'react-router-dom';

const items = [
  { key: "1", label: <Link to="/add-student">Add Student</Link> },
  { key: "2", label: <Link to="/">All Students</Link> },
  { key: "3", label: <Link to="/attendance">Attendance</Link> }
];

const MyLayout = ({children}) => {
  const location = useLocation(); // Get the current path

  // Map pathname to Menu keys
  const getSelectedKeys = () => {
    if (location.pathname === "/add-student") return ["1"];
    if (location.pathname === "/") return ["2"];
    if (location.pathname === "/attendance") return ["3"];
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
        }}
      >
        <div className="demo-logo" />
        <h1 className='logo'>Classroom</h1>
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
          }}
        />
      </Header>
      <Content
        style={{
          padding: '0 48px',
          marginTop: '64px',
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
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default MyLayout;