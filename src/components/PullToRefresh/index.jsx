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
            // firstArr: [
            //     {
            //         "id": 14893,
            //         "show_name": " (新雪颗粒)",
            //         "company_name": "沈阳东昂制药有限公司",
            //         "yb": 1
            //     },
            //     {
            //         "id": 2613,
            //         "show_name": "0号 (复方利血平氨苯蝶啶片)",
            //         "company_name": "华润双鹤药业股份有限公司",
            //         "yb": 1
            //     },
            //     {
            //         "id": 17455,
            //         "show_name": "11478 (注射用阿昔洛韦)",
            //         "company_name": "武汉普生制药有限公司",
            //         "yb": 1
            //     },
            //     {
            //         "id": 20064,
            //         "show_name": "14976 (吉林华侨)",
            //         "company_name": "吉林省华侨药业有限公司",
            //         "yb": 0
            //     },
            //     {
            //         "id": 20895,
            //         "show_name": "18种氨基酸注射液 (福建天泉)",
            //         "company_name": "福建天泉药业股份有限公司",
            //         "yb": 0
            //     },
            //     {
            //         "id": 2614,
            //         "show_name": "21金维他 多维元素片(21)",
            //         "company_name": "杭州民生健康药业有限公司",
            //         "yb": 0
            //     },
            //     {
            //         "id": 30175,
            //         "show_name": "21金维他 多维元素片(21)",
            //         "company_name": "杭州赛诺菲民生健康药业有限公司",
            //         "yb": 3
            //     },
            //     {
            //         "id": 1803,
            //         "show_name": "654-2 (消旋山莨菪碱片)",
            //         "company_name": "杭州民生药业集团有限公司",
            //         "yb": 0
            //     },
            //     {
            //         "id": 1008,
            //         "show_name": "654-2针 (盐酸消旋山莨菪碱注射液)",
            //         "company_name": "杭州民生药业集团有限公司",
            //         "yb": 0
            //     },
            //     {
            //         "id": 9215,
            //         "show_name": "707 (长春益寿膏)",
            //         "company_name": "CFDA药品说明书范本(OTC)",
            //         "yb": 0
            //     },
            //     {
            //         "id": 55449,
            //         "show_name": "707 肺气肿片",
            //         "company_name": "江苏七0七天然制药有限公司",
            //         "yb": 3
            //     },
            //     {
            //         "id": 13750,
            //         "show_name": "707 如意金黄散",
            //         "company_name": "江苏七0七天然制药有限公司",
            //         "yb": 1
            //     },
            //     {
            //         "id": 19072,
            //         "show_name": "8808 聚维酮碘溶液",
            //         "company_name": "上海运佳黄浦制药",
            //         "yb": 0
            //     },
            //     {
            //         "id": 4007,
            //         "show_name": "999 (感冒退热颗粒)",
            //         "company_name": "北京三九药业有限公司",
            //         "yb": 1
            //     },
            //     {
            //         "id": 31979,
            //         "show_name": "999 小柴胡颗粒",
            //         "company_name": "华润三九医药股份有限公司",
            //         "yb": 1
            //     },
            //     {
            //         "id": 2615,
            //         "show_name": "999皮炎平 复方醋酸地塞米松乳膏",
            //         "company_name": "华润三九医药股份有限公司",
            //         "yb": 0
            //     },
            //     {
            //         "id": 37626,
            //         "show_name": "999皮炎平 曲安奈德益康唑乳膏",
            //         "company_name": "华润三九（南昌）药业有限公司",
            //         "yb": 1
            //     },
            //     {
            //         "id": 1615,
            //         "show_name": "安本 (氨甲苯酸氯化钠注射液)",
            //         "company_name": "江苏晨牌药业有限公司",
            //         "yb": 0
            //     },
            //     {
            //         "id": 791,
            //         "show_name": "奥邦 (奥扎格雷钠氯化钠注射液)",
            //         "company_name": "长春豪邦药业有限公司",
            //         "yb": 0
            //     },
            //     {
            //         "id": 16994,
            //         "show_name": "安卜 (复方头孢克洛胶囊)",
            //         "company_name": "哈尔滨誉衡药业股份有限公司",
            //         "yb": 0
            //     }
            // ],
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
                    renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                        {!this.state.isLoading ? '加载中....' : '我是有底线的'}
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