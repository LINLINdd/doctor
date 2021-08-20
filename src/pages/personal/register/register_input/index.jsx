import React, { Component } from 'react';
import { List, InputItem, Toast, Button } from 'antd-mobile';
import './index.css'
class login_input extends Component {
    state = {
        hasError: false,
        nameError: false,
        paswordError: false,

        username: '',
        pasword: '',
        confirmpasword: ''
    }
    onErrorName = () => {
        if (this.state.nameError) {
            Toast.info('用户名需要4到11位');
        }
    }
    onErrorClick = () => {
        if (this.state.hasError) {
            Toast.info('密码需要6位以上');
        }
    }
    onErrorpassworw = () => {
        if (this.state.hasError) {
            Toast.info('密码需要6位以上');
        }
    }
    onChange = (value) => {
        if (value.replace(/\s/g, '').length < 6) {
            this.setState({
                hasError: true,
            });
            if (this.state.confirmpasword !== '') {
                if (value !== this.state.confirmpasword) {
                    console.log(value);
                    console.log(this.state.confirmpasword);
                    Toast.info('密码不符合');
                    this.setState({
                        hasError: true,
                    });
                }
            }

        } else {
            this.setState({
                hasError: false,
            });
        }
        this.setState({
            pasword: value,
        });
    }
    confirmpasword = (value) => {
        if (value.replace(/\s/g, '').length < 6 || value !== this.state.pasword) {
            console.log(value);
            Toast.info('与密码不符');
            this.setState({
                paswordError: true,
            });
        } else {
            this.setState({
                paswordError: false,
            });
        }
        this.setState({
            confirmpasword: value,
        });
    }
    username = (value) => {
        if (value.replace(/^[a-zA-Z0-9_-]^/, '').length < 6) {
            this.setState({
                nameError: true,
            });
        } else {
            this.setState({
                nameError: false,
            });
        }
        this.setState({
            username: value,
        });
    }

    render() {
        return (
            <div className='register_input'>
                <List renderHeader={() => '请输入账号密码进行登录'}></List>
                <InputItem
                    type="text"
                    placeholder="输入用户名"
                    error={this.state.nameError}
                    onErrorClick={this.onErrorName}
                    onChange={this.username}
                    value={this.state.username}
                >用户名</InputItem>
                <InputItem
                    type="password"
                    placeholder="输入密码"
                    error={this.state.hasError}
                    onErrorClick={this.onErrorClick}
                    onChange={this.onChange}
                    value={this.state.pasword}
                >密码</InputItem>
                <InputItem
                    type="password"
                    placeholder="再次输入密码"
                    error={this.state.paswordError}
                    onErrorClick={this.onErrorpassworw}
                    onChange={this.confirmpasword}
                    value={this.state.confirmpasword}
                >确认密码</InputItem>

                <Button type="primary" className='button' onClick={() => {
                    console.log(1111);
                }}>注册</Button>
            </div>
        );
    }
}

export default login_input;