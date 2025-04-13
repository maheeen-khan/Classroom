import React, { useState, useContext } from 'react';
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
} from 'antd';
import axios from 'axios'
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import StudentContext from '../context/StudentContext';
import '../ComponentsStyleSheet/login-signup.css'
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
  const { totalStudents, incrementStudentCount } = useContext(StudentContext)

  const token = localStorage.getItem('token'); // retrieve token after login

  const onFinish = async (values) => {

    setLoading(true);
    console.log("Submitted Values:", values);

    try {
      const uploadData = await fetch("http://localhost:3000/api/addStudent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` // Include the token in the headers
        },
        body: JSON.stringify(values),
      });

      const data = await uploadData.json();

      setTimeout(() => {
        setLoading(false);
        form.resetFields();
        toast.success("Student added successfully!");
        incrementStudentCount(); // Increment the count in context

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
            navigate('/allStudents')
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
          style={{ margin: '0 auto' }}
          initialValues={{ variant: 'filled' }}
          onFinish={onFinish}
        >

          <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input name!' }]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Class"
            name="Class"
            rules={[
              { required: true, message: 'Please input class' },
              { type: "number", min: 6, max: 10, message: "Class must be number & between 6 and 10" },
            ]}
          >
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            label="Roll no"
            name="rollNo"
            rules={[
              { required: true, message: 'Please input roll no' },
              { type: "number", min: 1, max: 30, message: "Roll no must be number & between 1 and 30" },
            ]}
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

          <Form.Item
            label=" "
            colon={false}
            wrapperCol={{ xs: { span: 24 }, sm: { span: 14 } }}
          >
            <div style={{ textAlign: 'center' }}>
              <button
                alt={loading ? 'Adding...' : 'Add Student'}
                className="user-btn"
                htmlType="submit"
              >
                <i>A</i>
                <i>d</i>
                <i>d</i>
                <i>&nbsp;</i>
                <i>S</i>
                <i>t</i>
                <i>u</i>
                <i>d</i>
                <i>e</i>
                <i>n</i>
                <i>t</i>
              </button>
            </div>
          </Form.Item>


        </Form>
      </div>
    </>
  );
};
export default BasicForm;