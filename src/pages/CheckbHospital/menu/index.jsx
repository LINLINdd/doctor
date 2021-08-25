/* eslint no-nested-ternary:0 */
import { Menu, ActivityIndicator, NavBar } from 'antd-mobile';
import React, { Component, Fragment } from 'react';

const data = [
    {
        value: '1',
        label: 'Food',
        children: [
            {
                label: 'All Foods',
                value: '1',
                disabled: false,
            },
            {
                label: 'Chinese Food',
                value: '2',
            }, {
                label: 'Hot Pot',
                value: '3',
            }, {
                label: 'Buffet',
                value: '4',
            }, {
                label: 'Fast Food',
                value: '5',
            }, {
                label: 'Snack',
                value: '6',
            }, {
                label: 'Bread',
                value: '7',
            }, {
                label: 'Fruit',
                value: '8',
            }, {
                label: 'Noodle',
                value: '9',
            }, {
                label: 'Leisure Food',
                value: '10',
            }],
    }, {
        value: '2',
        label: 'Supermarket',
        children: [
            {
                label: 'All Supermarkets',
                value: '1',
            }, {
                label: 'Supermarket',
                value: '2',
                disabled: true,
            }, {
                label: 'C-Store',
                value: '3',
            }, {
                label: 'Personal Care',
                value: '4',
            }],
    },
    {
        value: '3',
        label: 'Extra',
        isLeaf: true,
        children: [
            {
                label: 'you can not see',
                value: '1',
            },
        ],
    },

];

class MenuExample extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            initData: '',
            show: false,
        };
        // this.onChange()
    }
    componentDidMount() {
        console.log(this);
        this.setState({
            show: this.props.msg
        })
    }
    onChange = (value) => {
        let label = '';
        data.forEach((dataItem) => {
            if (dataItem.value === value[0]) {
                label = dataItem.label;
                if (dataItem.children && value[1]) {
                    dataItem.children.forEach((cItem) => {
                        if (cItem.value === value[1]) {
                            label += ` ${cItem.label}`;
                        }
                    });
                }
            }
        });
        console.log(label);
    }
    handleClick = (e) => {
        e.preventDefault(); // Fix event propagation on Android
        this.setState({
            show: !this.state.show,
        });
        // mock for async data loading
        // if (!this.state.initData) {
        //     setTimeout(() => {
        //         this.setState({
        //             initData: data,
        //         });
        //     }, 500);
        // }
        this.setState({
            initData: data,
        });
    }


    render() {
        const { initData, show } = this.state;
        const menuEl1 = (
            <Menu
                className="foo-menu"
                data={initData}
                value={['1', '3']}
                onChange={this.onChange}
                height='100vh'
            />
        );
        let Left_12 = () => {
            return (<Menu
                className="foo-menu"
                data={initData}
                value={['1', '3']}
                onChange={this.onChange}
                height='100vh'
            />
            )
        }
        const loadingEl = (
            <div style={{ width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
                <ActivityIndicator size="large" />
            </div>
        );
        return (
            <div >
                <div>
                    <NavBar
                        leftContent="展开"
                        mode="light"
                        onLeftClick={this.handleClick}
                        className="top-nav-bar"
                    >
                        定位
                    </NavBar>
                </div>
                {/* <Left_12></Left_12> */}
                {/* <MenuEl/> */}
                {/* <LoadingEl></LoadingEl> */}
                {show ? menuEl1 : null}
            </div>
        );
    }
}

export default MenuExample;