import React, { useState, useEffect } from 'react';
import {
    Button,
    DatePicker,
    Form,
    Input,
    InputNumber,
} from 'antd';
import axios from 'axios'
import { toast } from "react-toastify";
import { useNavigate, useParams } from 'react-router-dom';

const { RangePicker } = DatePicker;
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
    },
};

const BasicForm = () => {

    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    const onFinish = async (values) => {

        setLoading(true);

        const updateStudent = async (values) => {
            try {
                const updateData = await axios.patch(`http://localhost:3000/api/updateStudent/${id}`, values);

                toast.success("Student has been updated");
                setTimeout(() => {
                    setLoading(false);
                    navigate('/');
                }, 1000);

            } catch (err) {
                console.log("Error:", err);
            }
        }
        updateStudent(values);

    };

    const getStudent = async () => {
        try {
            const uploadData = await axios.get(`http://localhost:3000/api/students/${id}`);

            form.setFieldsValue(uploadData.data); // setting the form values

        } catch (error) {
            console.log("Error:", error);
        }

    }
    useEffect(() => {
        getStudent();
    }, [])




    return (
        <>
            <Form
                {...formItemLayout}
                form={form}
                variant={'filled'}
                style={{ maxWidth: 600 }}
                initialValues={{ variant: 'filled' }}
                onFinish={onFinish}
            >

                <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input name!' }]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Class"
                    name="Class"
                    rules={[{ required: true, message: 'Please input class' },{ type: "number", min: 6, max: 10, message: "Class must be number & between 6 and 10" },]}
                >
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                    label="Roll no"
                    name="rollNo"
                    rules={[{ required: true, message: 'Please input roll no' },{ type: "number", min: 1, max: 30, message: "Roll no must be number & between 1 and 30" },]}
                >
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        { required: true, message: 'Please input email' },
                        { 
                            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 
                            message: "Please enter a valid email address!" 
                          }
                    ]}
                >
                    <Input style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                    label="Address"
                    name="Address"
                    rules={[{ required: true, message: 'Please input Address' }]}
                >
                    <Input style={{ width: '100%' }} />
                </Form.Item>

                {/* <Form.Item
          label="Session"
          name="session"
          rules={[{ required: true, message: 'Please input' }]}
        >
          <RangePicker />
        </Form.Item> */}

                <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        {loading ? 'Updating...' : 'Update Student'}
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};
export default BasicForm;