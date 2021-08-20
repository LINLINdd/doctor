import React, { Component } from 'react';
import { Icon, Button, Toast } from 'antd-mobile';
import './index.css'
class personal extends Component {
    state = {
        username: '登录/注册',
        exit: false,
        login: false,
        img_src: 'https://img2.baidu.com/it/u=1677342743,1708324479&fm=26&fmt=auto&gp=0.jpg'
    }
    componentDidMount() {
        this.getUsername()
        this.GetImg()
    }
    getUsername = () => {
        const username = JSON.parse(sessionStorage.getItem('username'))
        if (username) {
            this.setState({
                username, exit: true, login: true,
            })
        }
    }
    tiao = (id) => {
        this.props.history.push('/set', { id })
    }
    Exit = () => {
        window.sessionStorage.clear()
        this.props.history.push('/')
        Toast.success('登出成功', 1);
    }
    GetImg = () => {
        let img_src = window.sessionStorage.getItem('img')
        console.log(Boolean(img_src));
        if (img_src) {
            img_src = JSON.parse(img_src)
            console.log(img_src);
            this.setState({ img_src })
        }
    }
    handleFileImg = () => {
        let selected_file = this.refs.img.files[0];
        if (!selected_file) {
            return this.setState({ img_src: 'https://img2.baidu.com/it/u=1677342743,1708324479&fm=26&fmt=auto&gp=0.jpg' })
        }
        window.URL = window.URL || window.webkitURL;
        let img = window.URL.createObjectURL(selected_file)
        window.sessionStorage.setItem('img', JSON.stringify(img))
        this.setState({ img_src: img })
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
        const { username, exit, img_src, login } = this.state
        return (
            <div>
                <div className='login'>
                    <div className='login_in'>
                        <a href="/login" >{username}</a>
                    </div>
                    <div className='login_img'>
                        <img src={img_src} alt="" />
                        <input style={{ display: login ? 'block' : 'none' }} type="file" accept="image/*" ref='img' className='img_src' onChange={() => {
                            this.handleFileImg()
                        }} />
                    </div>
                </div>
                <div className='Set'>
                    <Set></Set>
                </div>
                <div>
                    <Button type="warning" style={{ margin: '2.5rem 1.25rem', display: exit ? 'block' : 'none' }} onClick={() => {
                        this.Exit()
                    }}>登出账号</Button>
                </div>
            </div>
        );
    }
}

export default personal;


