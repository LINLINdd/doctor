import { Badge } from 'antd-mobile';
import './index.css'
import React, { Component } from 'react';
import Home from '../../pages/Home'
import personal from '../../pages/personal';
import health from '../../pages/Health';
import { Redirect } from 'react-router-dom';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'


class tabbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            hidden: false,
            fullScreen: false,

            home: true,
            Personal: false,
            Health: false,
        };
    }
    componentDidMount() {
        let pathname = this.props.location.pathname.split('/')
        this.dateswitch(pathname[2])
    }
    dateswitch = (value) => {
        switch (value) {
            case 'home':
                this.setState({
                    home: true,
                    Personal: false,
                    Health: false,
                })
                break;
            case 'personal':
                this.setState({
                    home: false,
                    Personal: true,
                    Health: false,
                })
                break;
            case 'Health':
                this.setState({
                    home: false,
                    Personal: false,
                    Health: true,
                })
                break;
        }

    }

    render() {
        const { home, Personal, Health } = this.state
        return (
            <div className='tab-bar'>
                <CacheSwitch >
                    <CacheRoute path="/TabBar/Personal" component={personal}></CacheRoute >
                    <CacheRoute path="/TabBar/health" component={health}></CacheRoute >
                    <CacheRoute path="/TabBar/home" component={Home}></CacheRoute >
                    <Redirect to='/TabBar/home'></Redirect>
                </CacheSwitch >
                <div className='tab_bar_bootom' style={{ position: 'fixed', height: '3.125rem', width: '100%', bottom: 0 }}>
                    {/* <Setdate ></Setdate> */}

                    <li onClick={() => {
                        this.dateswitch('home')
                        this.props.history.push('/TabBar/home');
                    }}>
                        <svg className="icon" aria-hidden="true" style={{
                            width: '22px',
                            height: '22px'
                        }}>
                            <use xlinkHref={home ? '#icon-shouye-copy' : '#icon-shouye'}></use>
                        </svg>
                        <Badge >
                            <span style={{ color: home ? '#0db32b' : '#000' }}>首页</span>
                        </Badge>
                    </li>
                    <li onClick={() => {
                        this.dateswitch('Health')
                        this.props.history.push('/TabBar/Health');
                    }}>
                        <svg className="icon" aria-hidden="true" style={{
                            width: '22px',
                            height: '22px'
                        }}>
                            <use xlinkHref={Health ? '#icon-yiliao-copy' : '#icon-yiliao'}></use>
                        </svg>
                        <span style={{ color: Health ? '#0db32b' : '#000' }}>健康咨询</span>
                    </li>
                    <li onClick={() => {
                        this.dateswitch('personal')
                        this.props.history.push('/TabBar/personal');

                    }}>
                        <svg className="icon" aria-hidden="true" style={{
                            width: '22px',
                            height: '22px'
                        }}>
                            <use xlinkHref={Personal ? '#icon-wode1-copy' : '#icon-wode1'}></use>
                        </svg>
                        <span style={{ color: Personal ? '#0db32b' : '#000' }}>个人中心</span>
                    </li>
                </div >
            </div >

        )

    }
}




export default tabbar