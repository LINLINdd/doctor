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
    onErrorClick = () => {
        if (this.state.hasError) {
            Toast.info('Please enter 11 digits');
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
            <div className='login_input'>
                <InputItem
                    type="text"
                    placeholder="输入用户名"
                    error={this.state.nameError}
                    onErrorClick={this.onErrorClick}
                    onChange={this.username}
                    value={this.state.name}
                >用户名</InputItem>
                <InputItem
                    type="password"
                    placeholder="input your phone"
                    error={this.state.hasError}
                    onErrorClick={this.onErrorClick}
                    onChange={this.onChange}
                    value={this.state.value}
                >密码</InputItem>

                <Button type="primary" className='button' onClick={()=>{
                    
                }}>登录</Button>
            </div>
        );
    }
}

export default login_input;