'use client';
import React, { useState } from 'react';
import { Form, Input, Button, Divider } from 'antd';
import Image from 'next/image';

const AuthSection = () => {
  const [isLogin, setIsLogin] = useState(true); // To toggle between login and signup forms

  // Handle Form Submit
  const onFinish = (values: any) => {
    console.log('Form Submitted: ', values);
  };

  return (
    <section className="py-10 h-full bg-[#F6F5FF]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Form Section */}
        <div className="w-full md:w-1/2 max-w-md">
          <h2 className="text-4xl font-semibold text-[#0D0E43] text-center mb-8">
            {isLogin ? 'Login' : 'Sign Up'}
          </h2>

          {/* Form */}
          <Form onFinish={onFinish} layout="vertical" className="bg-white p-8 rounded-lg shadow-xl">
            {/* Email */}
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>

            {/* Password */}
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>

            {/* Submit Button */}
            <Form.Item>
              <Button className='bg-[#FB2E86] text-white' htmlType="submit" block>
                {isLogin ? 'Login' : 'Sign Up'}
              </Button>
            </Form.Item>

            {/* Toggle between login and signup */}
            <Divider />
            <Button type="link" block onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Don\'t have an account? Sign up' : 'Already have an account? Login'}
            </Button>
          </Form>
        </div>
       
      </div>
    </section>
  );
};

export default AuthSection;
