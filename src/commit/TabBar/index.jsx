import { TabBar, Badge } from 'antd-mobile';
import './index.css'
import React, { Component } from 'react';
import Home from '../../pages/Home'
import personal from '../../pages/personal';
import health from '../../pages/Health';
import { Route, Switch, Link, Redirect } from 'react-router-dom';


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
                <Switch>
                    <Route path="/TabBar/Personal" component={personal}></Route>
                    <Route path="/TabBar/health" component={health}></Route>
                    <Route path="/TabBar/home" component={Home}></Route>
                    <Redirect to='/TabBar/home'></Redirect>
                </Switch>
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
                        <Badge dot>
                            <span>首页</span>
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
                        <span>健康咨询</span>
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
                        <span>个人中心</span>
                    </li>
                </div >
            </div >

        )

    }
}




export default tabbar