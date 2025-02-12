import React from 'react';
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;
const items = [
    { key: 1, label: 'Home'},
    { key: 2, label: 'All student'},
    { key: 3, label: 'Attendence'},
    { key: 4, label: 'Contact'}
]
const MyLayout = ({children}) => {
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