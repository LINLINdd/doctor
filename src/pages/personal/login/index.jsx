import React, { Component } from 'react';
import Login_input from './login_input';
import './index.css'
class login extends Component {
    login = () => {
        this.props.history.push('/TabBar')
        // this.prosp.history.push('/TabBar')
    }
    render() {
        return (
            <div className='login_'>
                <h1 >登录</h1>
                <div className='signing-up'>
                    <Login_input login={this.login}></Login_input>
                </div>
                <div className='register'>
                    <a href="/register">注册</a>
                    <span>|</span>
                    <a href="">忘记密码</a>
                </div>
            </div>
        );
    }
}

export default login;