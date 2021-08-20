import React, { Component } from 'react';
import { NavBar, Icon, Card, InputItem, Button } from 'antd-mobile';
import './index.css'
class index extends Component {
    render() {
        return (
            <div className='inquiry'>
                <NavBar
                    mode="dark"
                    leftContent="Back"
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >聊天室</NavBar>
                <Card>
                    <Card.Body>
                        <div className='title_body'>
                            <div className='left'>
                                <div className='title'>
                                    <div className='img'>
                                        <img src="https://img2.baidu.com/it/u=1677342743,1708324479&fm=26&fmt=auto&gp=0.jpg" alt="" />
                                    </div>
                                    <span className='name'>我是一个医生</span>
                                    <p className='title_content'>你很美你很美你很美你很美你很美你很美你很美你很美你很美你很美你很美你很美</p>
                                </div>
                            </div>
                            <div className='right'>
                                <div className='title'>
                                    <p className='title_content'>我很帅我很帅我很帅我很帅我很</p>
                                    <span className='name'>我是一个</span>
                                    <div className='img'>
                                        <img src="https://img2.baidu.com/it/u=1677342743,1708324479&fm=26&fmt=auto&gp=0.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                    <Card.Footer content={<div className='button_title'>
                        <InputItem
                            clear
                            placeholder="请输入要咨询的问题"
                        ></InputItem>
                        <Button className='button' type="ghost" inline size="small" >发送</Button>
                    </div>
                    } />
                </Card>
            </div>
        );
    }
}

export default index;