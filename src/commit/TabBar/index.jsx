import { TabBar } from 'antd-mobile';
import './index.css'
import React, { Component } from 'react';
import Home from '../../pages/Home'
import Personal from '../../pages/personal';
class tabbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
            hidden: false,
            fullScreen: false,
        };
    }

    renderContent(pageText) {
        return (
            <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
                <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
                <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
                    onClick={(e) => {
                        e.preventDefault();
                        this.setState({
                            hidden: !this.state.hidden,
                        });
                    }}
                >
                    Click to show/hide tab-bar
                </a>
                <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
                    onClick={(e) => {
                        e.preventDefault();
                        this.setState({
                            fullScreen: !this.state.fullScreen,
                        });
                    }}
                >
                    Click to switch fullscreen
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
                        title="Life"
                        key="Life"
                        icon={
                            <svg className="icon" aria-hidden="true" style={{
                                width: '22px',
                                height: '22px'
                            }}>
                                <use xlinkHref="#icon-shouye"></use>
                            </svg>
                        }
                        selectedIcon={<svg className="icon" aria-hidden="true" style={{
                            width: '22px',
                            height: '22px'
                        }}>
                            <use xlinkHref="#icon-shouye-copy"></use>
                        </svg>
                        }
                        selected={this.state.selectedTab === 'blueTab'}
                        badge={1}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab',
                            });
                        }}
                        data-seed="logId"
                    >
                        <Home></Home>
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
                        title="Koubei"
                        key="Koubei"
                        badge={'new'}
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            });
                        }}
                        data-seed="logId1"
                    >
                        {this.renderContent('Koubei')}
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
                        title="Friend"
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
            </div>
        );
    }
}

export default tabbar