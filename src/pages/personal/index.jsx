import React, { Component } from 'react';
import { Icon, } from 'antd-mobile';
import './index.css'
class personal extends Component {
    state = {
        username: '登录/注册'
    }
    componentDidMount() {
        this.getUsername()
    }
    getUsername = () => {
        const username = JSON.parse(sessionStorage.getItem('username'))
        if (username) {
            this.setState({ username })
        }
    }
    tiao = (id) => {
        console.log(this);
        this.props.history.push('/set', { id })
        // this.prosp.history.push('/set', id)
    }
    render() {
        const setDate = [{ name: '我的问诊', id: 1 }, { name: '关注医生', id: 2 }, { name: '患者信息', id: 3 }, { name: '设置', id: 4 }]
        let Set = () => {
            return (<ul>
                {setDate.map((item, index) => {
                    return <li key={item.id} onClick={() => {
                        console.log(item.id);
                        this.tiao(item.id)
                    }}>
                        <span>{item.name}</span><Icon type='right' />
                    </li>
                })
                }
            </ul>)
        }
        const { username } = this.state
        return (
            <div>
                <div className='login'>
                    <div className='login_in'>
                        <a href="/login" >{username}</a>
                    </div>
                    <div className='login_img'>
                        <img src="https://img2.baidu.com/it/u=1677342743,1708324479&fm=26&fmt=auto&gp=0.jpg" alt="" />
                    </div>
                </div>
                <div className='Set'>
                    <Set></Set>
                </div>
            </div>
        );
    }
}

export default personal;


