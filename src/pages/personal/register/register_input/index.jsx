import React, { Component } from 'react';
import { List, InputItem, Toast, Button } from 'antd-mobile';
import './index.css'
class login_input extends Component {
    state = {
        hasError: false,
        nameError: false,
        value: '',
        name: ''
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
    onChange = (value) => {
        if (value.replace(/\s/g, '').length < 6) {
            this.setState({
                hasError: true,
            });
        } else {
            this.setState({
                hasError: false,
            });
        }
        this.setState({
            value,
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
            name: value,
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
                    value={this.state.name}
                >用户名</InputItem>
                <InputItem
                    type="password"
                    placeholder="输入密码"
                    error={this.state.hasError}
                    onErrorClick={this.onErrorClick}
                    onChange={this.onChange}
                    value={this.state.value}
                >密码</InputItem>
                <InputItem
                    type="password"
                    placeholder="再次输入密码"
                    error={this.state.hasError}
                    onErrorClick={this.onErrorClick}
                    onChange={this.onChange}
                    value={this.state.value}
                >确认密码</InputItem>

                <Button type="primary" className='button' onClick={() => {
                    console.log(1111);
                }}>注册</Button>
            </div>
        );
    }
}

export default login_input;