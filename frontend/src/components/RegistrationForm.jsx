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
const registrationForm = () => {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const onFinish = async values => {

        setLoading(true)
        // console.log('Success:', values);
        try {
            const newUser = await axios.post('https://classroom-production-fd75.up.railway.app/register', values)
            console.log(newUser.data)
            toast.success("User registered successfully")
            setTimeout(() => {
                setLoading(false)
                navigate('/')

            }, 2000);
        } catch (error) {
            console.log(error)
            toast.error("User registration failed")
            setLoading(false)
        };
    }

    return (
        <>
            <h1 className='classroom-head'>Classroom</h1>
            <h1 style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'Georgia', fontSize: '38px', marginBottom: '45px', color: '#161179' }}>Sign up <span style={{color:'hsl(210, 72%, 50%)'}}>your Account</span></h1>
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
                    rules={[
                        { required: true, message: 'Please input username' },
                        { type: "string", min: 3, max: 15, message: "Username must be string & of its length should be 3 to 15" },
                    ]}
                >
                    <Input prefix={<UserOutlined />} placeholder="Username" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        { required: true, message: 'Please input password' },
                        { type: "string", min: 6, max: 15, message: "Password length must be 6 to 15" },
                    ]}
                >
                    <Input.Password prefix={<LockOutlined />} type="password" placeholder="Password" />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" label={null}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item label={null}>
                    <div style={{ textAlign: 'center' }}>

                        {/* <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                            {loading ? "Signing..." : "Sign Up"}
                        </Button> */}
                        <button alt={loading ? "Signing..." : "Sign Up"} className='user-btn' htmlType="submit">
                            
                            <i>S</i>
                            <i>i</i>
                            <i>g</i>
                            <i>n</i>
                            <i>&nbsp;</i>
                            <i>u</i>
                            <i>p</i>
                            
                        </button>

                        <br />
                        <p style={{ marginTop: '20px' }}>Already have an account? <a href="/">Login</a></p>
                    </div>

                </Form.Item>
            </Form>
        </>
    );
};
export default registrationForm;
