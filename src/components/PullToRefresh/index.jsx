import React, { Component } from 'react';
import './index.css'
import { ListView, PullToRefresh } from 'antd-mobile';
import { searchBottle } from '../../network/CheckDisease'
export default class Earnings extends Component {
    constructor(props) {
        super(props)
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource,
            firstArr: [],
            firstArr1: [],
            refreshing: false, //上拉刷新
            isLoading: true, //数据是否加载完毕
            num: 2
        }
    }
    componentDidMount() {
        this.searchBottle()
    }
    async searchBottle() {
        const { data: res } = await searchBottle()
        // console.log(res.data.items);
        this.setState({
            firstArr: res.data.items,
            dataSource: this.state.dataSource.cloneWithRows({ ...res.data.items })
        })
    }
    async getsearchBottle(value) {
        const { data: res } = await searchBottle(20, value)

        this.setState({
            firstArr1: [...res.data.items]
        })
        console.log(this.state.firstArr1);
    }

    //下拉刷新
    onRefresh = () => {
        this.setState({ refreshing: true })
        //接口请求第一页数据,完成后将refreshing设为false
        setTimeout(() => {
            this.setState({
                refreshing: false
            })
        }, 1000)
    }
    // 滑动到底部时加载更多
    onEndReached = (event) => {
        this.getsearchBottle(this.state.num)
        // 显示加载loading....
        this.setState({
            isLoading: false
        })
        // 当this.state.num 》 1时，规定为数据加载完毕
        if (this.state.num > 10) {
            console.log('请求？');
            this.setState({
                isLoading: true
            })
            return false
        }
        // 等待2s后再原始数据上追加数据
        setTimeout(() => {
            this.setState({
                firstArr: [...this.state.firstArr, ...this.state.firstArr1]
            },
                () => {
                    // 数据发生改变是要使用cloneWithRows通知
                    this.setState({
                        num: this.state.num += 1,
                        dataSource: this.state.dataSource.cloneWithRows({ ...this.state.firstArr }),
                    })
                    console.log(this.state)
                })
        }, 500)
    }
    render() {
        const row = (rowData, sectionID, rowID) => {
            // 这里rowData,就是上面方法cloneWithRows的数组遍历的单条数据了，直接用就行
            // console.log('rowData', rowData);
            // console.log('sectionID', sectionID);
            // console.log('rowID', rowID);
            return (
                <div className="earnings">
                    <div className="content">
                        <span className="date box">{rowData.show_name}</span>
                        <span className="money box">{rowData.company_name}</span>
                    </div>
                </div>
            )
        }
        const Bigimg = () => {
            return (<img style={{ width: '20rem', }} className='bigimg' src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F1b2dac68974a58b3c9d24a249eee9c4c5d6615ed930f-XyisBg_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632409525&t=29fa96dbdfedbe6ac9e5a6af1cb541c6' />)
        }
        return (
            <div className="earnings-list">
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={row}
                    initialListSize={15}
                    pageSize={10}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={10}
                    useBodyScroll={false}
                    renderHeader={() =>
                    (
                        <div className="earnings-title">
                            <span>日期</span>
                            <span>好友贡献奖励</span>
                        </div>
                    )
                    }
                    renderFooter={() => (<div className='Bigimg_' style={{ padding: 30, textAlign: 'center' }}>
                        {!this.state.isLoading ? < Bigimg /> : '我是有底线的'}
                    </div>)}
                    style={{ width: '100vw', height: '100vh' }}
                    pullToRefresh={<PullToRefresh // import { PullToRefresh } from 'antd-mobile'
                        refreshing={this.state.refreshing}
                        onRefresh={this.onRefresh}
                    />}
                />
            </div>
        )
    }
}