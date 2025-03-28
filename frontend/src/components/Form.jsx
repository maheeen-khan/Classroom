import React, { useState } from 'react';
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
} from 'antd';
import axios from 'axios'
import { toast , ToastContainer} from "react-toastify";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

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

  const onFinish = async (values) => {

    setLoading(true);
    console.log("Submitted Values:", values);

    try {
      const uploadData = await fetch("http://localhost:3000/api/addStudent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      
      const data = await uploadData.json();

      setTimeout(() => {
        setLoading(false);
        form.resetFields();
        toast.success("Student added successfully!");
        
        Swal.fire({
          title: "Do you want to add more students?",
          showDenyButton: true,
          confirmButtonText: "Yes",
          denyButtonText: `Not yet`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            // Swal.fire("Saved!", "", "success");
            navigate('/add-student')
          } else if (result.isDenied) {
            // Swal.fire("Changes are not saved", "", "info");
            navigate('/')
          }
        });


      }, 1000);

    } catch (error) {

      toast.error("Failed to add student! ❌");

    }

  };

  return (
    <>

  <div className="cent">
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
          rules={[{ required: true, message: 'Please input class' }]}
        >
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          label="Roll no"
          name="rollNo"
          rules={[{ required: true, message: 'Please input roll no' }]}
        >
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input email' }]}
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

        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button type="primary" htmlType="submit">
            {loading ? 'Adding...' : 'Add Student'}
          </Button>
        </Form.Item>
      </Form>
      </div>
    </>
  );
};
export default BasicForm;