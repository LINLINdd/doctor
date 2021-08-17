import React, { Component } from 'react';
import { Icon, } from 'antd-mobile';
import './index.css'
class personal extends Component {
    render() {
        const setDate = ['我的问诊', '关注医生', '患者信息', '设置']
        let Set = () => {
            return (<ul>
                {setDate.map((item, index) => {
                    return <a href="" key={index}>
                        <li>
                            <span>{item}</span><Icon type='right' />
                        </li>
                    </a>
                })}
            </ul>)
        }
        return (
            <div>
                <div className='login'>
                    <div className='login_in'>
                        <a href="/login" >登录/注册</a>
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


