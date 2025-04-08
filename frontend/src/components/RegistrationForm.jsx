import React, {useState} from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
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
            const newUser = await axios.post('http://localhost:3000/register', values)
            console.log(newUser.data)
           toast.success("User registered successfully")
            setTimeout(() => {
                setLoading(false)
                navigate('/login')
                
            }, 2000);
        } catch (error) {
            console.log(error)
            toast.error("User registration failed")
            setLoading(false)
        };
    }

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Sign Up</h1>
            <Form
                name="basic"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600, margin: '0 auto', marginTop: 30 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" label={null}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        {loading ? "Signing..." : "Sign Up"}
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};
export default registrationForm;