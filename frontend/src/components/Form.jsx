import React from 'react';
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
} from 'antd';

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
  
  const onFinish = (values) => {
    console.log("Submitted Values:", values);
  };
  
  return (
    <Form
      {...formItemLayout}
      form={form}
      variant={'filled'}
      style={{ maxWidth: 600 }}
      initialValues={{ variant: 'filled' }}
      onFinish={onFinish}
    >
    
      <Form.Item label="Name" name="Name" rules={[{ required: true, message: 'Please input name!' }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Class"
        name="class"
        rules={[{ required: true, message: 'Please input class' }]}
      >
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label="Roll no"
        name="roll no"
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
        label="Session"
        name="session"
        rules={[{ required: true, message: 'Please input' }]}
      >
        <RangePicker />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default BasicForm;