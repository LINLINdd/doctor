import React, { Component } from 'react';
import Login_input from './login_input';
import './index.css'
class login extends Component {
    render() {
        return (
            <div>
                <h1 >登录</h1>
                <div className='signing-up'>
                    <Login_input></Login_input>
                </div>
            </div>
        );
    }
}

export default login;