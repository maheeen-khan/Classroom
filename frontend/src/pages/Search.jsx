import React, { useState } from 'react'
import { AudioOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import axios from 'axios';
import ViewCard from '../components/ViewCard';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);


const Attendance = () => {

  const [search, setSearch] = useState('')
  const [searchInput, setSearchInput] = useState(''); // State to control input field
  const [searchLoading, setSearchLoading] = useState(false)

  const onSearch = (value, _e, info) => {
    setSearchLoading(true)
    console.log(info === null || info === void 0 ? void 0 : info.source, value);

    setTimeout(() => {
      getStd(value);
    }, 500);

 
    setSearchInput(''); // Clear input field after search
  }

  const getStd = async (name) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/students/name/${name}`);

      setSearch(response.data)
      setSearchLoading(false);

    } catch (error) {
      console.log(error.message)
      setSearch([]); // Clear search results on error
      setSearchLoading(false);

    }
  }



  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
        <Space direction="vertical">

          <Search
            value={searchInput} // Controlled input
            onChange={(e) => setSearchInput(e.target.value)} // Update input state

            placeholder="Search Student"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
            prefix={<UserOutlined />}
            loading={searchLoading}
          />

        </Space>
      </div>
      <div style={{ marginTop: '20px' }}>
        {search.length > 0 ? (

          search.map((student, index) => (
            <ViewCard name={student.name} Class={student.Class} rollNo={student.rollNo} email={student.email} Address={student.Address} createdAt={student.createdAt} updatedAt={student.updatedAt} />
          ))
        ) : (
          <p style={{ color: 'grey', textAlign: 'center', marginTop: 70 }}>No data display 
         
          </p>
        )}
        
      </div>
    </>
  )
};

export default Attendance