import React from 'react'
import {Button, Form, Input} from 'antd';
import {Link} from 'react-router-dom';
import "./../../App.css"

function Login() {
  return (
    <>
    <main className='App-header'>
        <h1>Login to Book my show</h1>
        <section className='mw-500 text-center px-3'>
            <Form layout='vertical'>
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
