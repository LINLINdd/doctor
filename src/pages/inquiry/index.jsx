import React, { Component, Fragment } from 'react';
import { NavBar, Icon, Card, InputItem, Button } from 'antd-mobile';
import './index.css'
import { getiInquiry, setiInquiry } from '../../network/inquiry'
class index extends Component {
    state = {
        datttt: [
            // { id: 1, name: '我是一个医生', title_content: '你好呀病人' },
            // { id: 1, name: '我是一个医生', title_content: '你好呀病人' },
            // { id: 2, name: '我是一个病人', title_content: '你好呀医生' },
        ]
    }
    componentDidMount() {
        // window.addEventListener('scroll', this.bindHandleScroll)
        this.getiInquiry()
        window.scrollTo({ top: 50 + 'px' })

    }
    getiInquiry = async () => {
        const { data: res } = await getiInquiry()
        console.log(res);
        this.setState({
            datttt: res.data
        })
    }
    setiInquiry = async (obj) => {
        const { data: res } = await setiInquiry(obj.id, obj.name, obj.title_content)
        if (res.Status != 200) {
            console.log('错误');
        }
        // console.log(res);
    }

    submit = () => {
        console.log(window.scrollY);
        let value = this.refs.input.state.value
        if (value !== '') {
            let im = { id: 2, name: '我是一个医生', title_content: value }
            // this.setState({
            //     datttt: [...this.state.datttt, im]
            // })
            this.setiInquiry(im)
            this.refs.input.state.value = ''
            window.scrollTo({ top: 999999 })
            this.getiInquiry()
        } return

    }
    bindHandleScroll = (e) => {
        console.log(e);
    }
    render() {

        const { datttt } = this.state
        let Data = () => {
            return datttt.map((item, index) => {
                return (
                    <Fragment key={index + item.id}>
                        <div className='left' style={{ display: item.id == 1 ? 'block' : 'none' }}>
                            <div className='title'>
                                <div className='img'>
                                    <img src="https://img2.baidu.com/it/u=1677342743,1708324479&fm=26&fmt=auto&gp=0.jpg" alt="" />
                                </div>
                                <span className='name'>{item.name}</span>
                                <p className='title_content'>{item.title_content}</p>
                            </div>
                        </div>
                        <div className='right' style={{ display: item.id == 2 ? 'block' : 'none' }}>
                            <div className='title'>
                                <p className='title_content'>{item.title_content}</p>
                                <span className='name'>{item.name}</span>
                                <div className='img'>
                                    <img src="https://img2.baidu.com/it/u=1677342743,1708324479&fm=26&fmt=auto&gp=0.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </Fragment>
                )
            })
        }

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
                            <Data />
                            {/* <div className='left'>
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
                            </div> */}
                        </div>
                    </Card.Body>
                    <Card.Footer content={<div className='button_title'>
                        <InputItem
                            ref='input'
                            clear
                            placeholder="请输入要咨询的问题"
                            onKeyUp={(e) => {
                                if (e.code === "Enter") {
                                    this.submit()
                                }
                            }}
                        ></InputItem>
                        <Button className='button' type="ghost" inline size="small" onClick={() => {
                            this.submit()
                        }} >发送</Button>
                    </div>
                    } />
                </Card>
            </div>
        );
    }
}

export default index;