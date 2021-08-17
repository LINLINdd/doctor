import React, { Component } from 'react';
import Login_input from './register_input';

class register extends Component {
    render() {
        return (
            <div className='login_'>
                <h1 >注册</h1>
                <div className='signing-up'>
                    <Login_input></Login_input>
                </div>
                <div className='register'>
                    <span>已有账号？</span><a href="/login">马上登录</a>
                </div>
            </div>
        );
    }
}

export default register;