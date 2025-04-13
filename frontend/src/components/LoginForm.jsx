import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../ComponentsStyleSheet/login-signup.css'

const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};
const LoginForm = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const onFinish = async values => {

        setLoading(true)
        // console.log('Success:', values);
        try {
            const newUser = await axios.post('http://localhost:3000/login', values)
            console.log(newUser.data)
            localStorage.setItem('token', newUser.data.jwtToken); // store after login
            toast.success("User logged in successfully")
            setTimeout(() => {
                setLoading(false)
                navigate('/')
            }, 2000);
        } catch (error) {
            console.log(error)
            toast.error("User does not exist")
            setLoading(false)
        };
    }
    return (
        <>
            <h1 className='classroom-head'>Classroom</h1>
            <h1 style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'Georgia', fontSize: '38px', marginBottom: '45px', color: '#161179' }}>Login <span style={{color:'hsl(210, 72%, 50%)'}}>to your Account</span></h1>
            <Form
                name="basic"
                style={{ maxWidth: 400, margin: '0 auto', marginTop: 30 }}
                initialValues={{ remember: false }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item

                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input prefix={<UserOutlined />} placeholder="Username" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password prefix={<LockOutlined />} type="password" placeholder="Password" />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" label={null}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item label={null}>
                    <div style={{ textAlign: 'center' }}>
                        {/* <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                            {loading ? "Logining..." : "Login"}
                        </Button> */}

                        {/* uiverse button */}

                        <button alt={loading ? "Logining..." : "Login"} className='user-btn' htmlType="submit">
                            
                            <i>L</i>
                            <i>o</i>
                            <i>g</i>
                            <i>&nbsp;</i>
                            <i>i</i>
                            <i>n</i>
                            
                        </button>

                        <p style={{ marginTop: '20px' }}>Don't have an account? <a href="/register">Sign up</a></p>
                    </div>

                </Form.Item>
            </Form>
        </>
    );
};
export default LoginForm;