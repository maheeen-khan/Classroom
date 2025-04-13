import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
const PageNotFound = () => {

    const nav = useNavigate()
    return (
        <>
        <Result
        className='mt-3'
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
        <Button className='log' onClick={() => nav('/allStudennts')}>Back Home</Button>
    }
      />
      </>
    )
};
export default PageNotFound;