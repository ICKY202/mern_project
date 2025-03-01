import React from 'react'
import {Button, Form, Input, message} from 'antd';
import {Link, useNavigate} from 'react-router-dom';
import "./../../App.css"
import { LoginUser } from '../../api/users';

function Login() {
    const navigate = useNavigate()
  const onFinish = async (value) => {
    try {
        const response = await LoginUser(value);
        const data = await response.json();
        if(data.success) {
            message.success(data.message);
            localStorage.setItem('token', data.data);
            navigate('/');
        }else {
            message.error(data.message);
        }
    }catch(err) {
        message.error(err.message);
    } 
  }; 
  return (
    <>
    <main className='App-header'>
        <h1>Login to Book my show</h1>
        <section className='mw-500 text-center px-3'>
            <Form layout='vertical' onFinish={onFinish}>
                <Form.Item label="Email" htmlFor='email' name="email" className='d-block' rules={[{required: true, message: "Email is required"},{type: "email", message: "Please enter a valid email"}]} >
                    <Input id='email' type='text' placeholder='Enter your email'></Input>
                </Form.Item>
                <Form.Item label="password" htmlFor='password' name="password" className='d-block' rules={[{required: true, message: "password is required"}]} >
                    <Input id='password' type='text' placeholder='Enter your password'></Input>
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit' block style={{fontSize: "1.5rem", fontWeight: "600"}}>
                        Login
                    </Button>
                </Form.Item>
                <div>
                    <p> New User? <Link to="/register">Register</Link></p>
                </div>
            </Form>
        </section>
    </main>
    </>
  )
}

export default Login
