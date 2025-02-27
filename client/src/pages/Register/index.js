import React from 'react';
import {Form, Input, Button, message} from 'antd';
import {Link} from 'react-router-dom';
import {RegisterUser} from '../../api/users';

function Register() {
  const onFinish = async (value) => {
    try {
        const response = await RegisterUser(value)
        if(response.success) {
            message.success(response.message);
        }else {
            message.error(response.message);
        }
    }catch(err) {
        message.error(err.message);
    }
  };
  return (
    <>
    <main className='App-header'>
        <h1>Register to Book my show</h1>
        <section className='mw-500 text-center px-3'>
            <Form layout='vertical' onFinish={onFinish}>
                <Form.Item label="Name" htmlFor='Name' name="name" className='d-block' rules={[{required: true, message: "Name is required"}]} >
                    <Input id='Name' type='text' placeholder='Enter your Name'></Input>
                </Form.Item>
                <Form.Item label="Email" htmlFor='email' name="email" className='d-block' rules={[{required: true, message: "Email is required"}, {type: "email", message: "Please enter a valid email"}]} >
                    <Input id='email' type='text' placeholder='Enter your email'></Input>
                </Form.Item>
                <Form.Item label="password" htmlFor='password' name="password" className='d-block' rules={[{required: true, message: "password is required"}]} >
                    <Input id='password' type='text' placeholder='Enter your password'></Input>
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit' block style={{fontSize: "1.5rem", fontWeight: "600"}}>
                        Register
                    </Button>
                </Form.Item>
                <div>
                    <p> Already a user? <Link to="/Login">Login</Link></p>
                </div>
            </Form>
        </section>
    </main>
    </>
  )
}

export default Register
