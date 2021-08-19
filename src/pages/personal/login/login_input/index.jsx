import React, { Component } from 'react';
import { List, InputItem, Toast, Button } from 'antd-mobile';
import { login } from '../../../../network/login'
import './index.css'
class login_input extends Component {
    state = {
        hasError: false,
        nameError: false,
        username: '111111',
        password: '1111111',

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
            password: value,
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
    failToast = (value) => {
        Toast.fail(value, 1);
    }
    successToast = (value) => {
        Toast.success(value, 1);
    }
    login = async () => {
        const { username, password } = this.state
        const { data: res } = await login(username, password)
        console.log(res);
        if (res.Status !== 200) {
            return this.failToast(res.login)
        } else {
            this.successToast(res.login)
            sessionStorage.setItem('username', JSON.stringify(res.data[0].username))
            sessionStorage.setItem('cookie', JSON.stringify(res.data[0]._id))
            // this.props.history.push('TabBar')
            this.props.login()
            // this.prosp.history.push('/TabBar')
        }

    }
    render() {
        return (
            <div className='login_input'>
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
                    value={this.state.password}
                >密码</InputItem>

                <Button type="primary" className='button' onClick={() => {
                    console.log(1111);
                    this.login()
                }}>登录</Button>
            </div>
        );
    }
}

export default login_input;