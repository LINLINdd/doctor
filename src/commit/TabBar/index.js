import { TabBar } from 'antd-mobile';
import './index.css'
import React, { Component } from 'react';
import Home from '../../pages/Home'
import Personal from '../../pages/personal';
import Health from '../../pages/Health';
import { Route, Switch, } from 'react-router-dom';


class tabbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            hidden: false,
            fullScreen: false,
        };
        console.log(this);
    }
    renderContent(pageText) {
        return (
            <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
                <a style={{ display: 'block', color: '#108ee9' }}
                    onClick={(e) => {
                        e.preventDefault();
                        this.setState({
                            hidden: !this.state.hidden,
                        });
                    }}
                >
                    隐藏导航栏
                </a>
            </div>
        );
    }

    render() {
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: '100vh' }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                    id='tabbar'
                >
                    <TabBar.Item
                        title="首页"
                        key="Life"
                        icon={
                            <svg className="icon" aria-hidden="true" style={{
                                width: '22px',
                                height: '22px'
                            }}>
                                <use xlinkHref="#icon-shouye"></use>
                            </svg>
                        }
                        selectedIcon={
                            <svg className="icon" aria-hidden="true" style={{
                                width: '22px',
                                height: '22px'
                            }}>
                                <use xlinkHref="#icon-shouye-copy"></use>
                            </svg>
                        }
                        selected={this.state.selectedTab === 'blueTab'}
                        badge={0}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab',
                            });
                            this.props.history.push('/Home')
                        }}
                        data-seed="logId"
                    >
                        <Route path="/Home" component={Home}></Route>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <svg className="icon" aria-hidden="true" style={{
                                width: '22px',
                                height: '22px'
                            }}>
                                <use xlinkHref="#icon-yiliao"></use>
                            </svg>
                        }
                        selectedIcon={
                            <svg className="icon" aria-hidden="true" style={{
                                width: '22px',
                                height: '22px'
                            }}>
                                <use xlinkHref="#icon-yiliao-copy"></use>
                            </svg>
                        }
                        title="健康咨询"
                        key="Koubei"
                        badge={0}
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            });
                        }}
                        data-seed="logId1"
                    >
                        <Health></Health>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <svg className="icon" aria-hidden="true" style={{
                                width: '22px',
                                height: '22px'
                            }}>
                                <use xlinkHref="#icon-wode1"></use>
                            </svg>
                        }
                        selectedIcon={
                            <svg className="icon" aria-hidden="true" style={{
                                width: '22px',
                                height: '22px'
                            }}>
                                <use xlinkHref="#icon-wode1-copy"></use>
                            </svg>
                        }
                        title="个人中心"
                        key="Friend"
                        dot
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                            });
                        }}
                    >
                        <Personal></Personal>
                    </TabBar.Item>

                </TabBar>
            </div >
        );
    }
}

export default tabbar