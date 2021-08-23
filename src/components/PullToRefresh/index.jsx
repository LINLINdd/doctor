// 新闻列表
import React, { Component } from 'react';
import { NavBar, Icon, Tabs, ListView, PullToRefresh } from 'antd - mobile';
import '.../.../pageCss / newsList / newsList.css'
import { findGardenInfoAll } from '.../.../api / newsList / newsListApi'
class News extends Component {
    constructor(props) {
        super(props)
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.state = {
            tabs: [
                { title: '全部', sub: '1' },
                { title: '园区动态', sub: '2' },
                { title: '木业资讯', sub: '3' }
            ],
            tabsIndex: 0,//tab选择的
            newsList: [],//数据
            dataSource: dataSource, //列表的初始化
            refreshing: true, //下拉刷新
            isLoading: true, //文字显示
            pages: {
                pageNum: 1,//第几页
                pageSize: 10,//每页多少
                type: 0,//列表的类型
            }
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.query(this.state.pages)
            // this.rData = genData();
            // this.setState({
            // dataSource: this.state.dataSource.cloneWithRows(this.rData),
            // isLoading: false,
            // });
        }, 600);
    }
    query(pages) {//数据请求
        let _this = this;
        findGardenInfoAll(pages).then(res => {
            if (res.pages >= this.state.pages.pageNum) {
                _this.state.pages.pageNum++;
                this.state.newsList = [...this.state.newsList, ...res.list]
                this.setState({
                    newsList: this.state.newsList,
                    dataSource: this.state.dataSource.cloneWithRows(this.state.newsList),
                    isLoading: false,
                    pages: _this.state.pages,
                });
            } else {
                _this.setState({
                    isLoading: false
                })
            }
            _this.setState({
                refreshing: false
            })
        })
    }
    onRefresh = () => { //下拉刷新
        this.state.pages.pageNum = 1;
        this.setState({ refreshing: true, isLoading: true, pages: this.state.pages, newsList: [] });
        setTimeout(() => {
            this.query(this.state.pages)
        }, 600);
    }
    onEndReached = (event) => {//触底加载
        if (this.state.isLoading) {
            return;
        }
        this.setState({ isLoading: true });
        setTimeout(() => {
            this.query(this.state.pages)
        }, 600);
    }
    render() {
        const row = (rowData, sectionID, rowID) => {
            return (
                <div key={rowID} style={{ height: '1rem', marginTop: '0.1rem', background: '#ffffff' }}>
                    {/* {rowData.messageTitle} */}

                    return (
                    <NavBar mode='light' icon={ } onLeftClick={() => this.props.history.go(-1)} />
                    新闻资讯
                    < Tabs tabs={this.state.tabs} onTabClick={(tab, index) => { }
                        // this.state.pages.type = index;
                        // this.state.pages.pageNum = 1;
                        // this.setState({ refreshing: true, isLoading: true, pages: this.state.pages, newsList: [] });
                        // this.query(this.state.pages);
                        )
                </div>
            )

        }
    }
    // < ListView ref={el => this.lv = el}
    //     // dataSource={this.state.dataSource}
    //     renderFooter={() => (<div style={{ textAlign: 'center' }}>
    //         {this.state.isLoading ? '加载中...' : '已加载全部'}
    //         )}
    //         renderRow={row}
    //         style={{
    //             height: '100%',
    //             overflow: 'auto',
    //         }}
    //         pullToRefresh={ }
    //         scrollRenderAheadDistance={500}
    //         onEndReached={this.onEndReached}
    //         onEndReachedThreshold={10}
    //         )
    //         )


    //  />   }
}
export default News;


// return (
//     <div key={rowID} style={{ height:‘1rem’,marginTop:‘0.1rem’,background:’#ffffff’}}>
//     {rowData.messageTitle}


//     );
//     };
//     return (


//     <NavBar mode=“light” icon={} onLeftClick={() => this.props.history.go(-1)}>
//     新闻资讯
//     {/ —/}

//     <Tabs tabs={this.state.tabs} onTabClick={(tab, index) => {
//     this.state.pages.type = index;
//     this.state.pages.pageNum = 1;
//     this.setState({ refreshing: true, isLoading: true ,pages:this.state.pages,newsList:[]});
//     this.query(this.state.pages);
//     }}>
//     {/ ----/}

//     <ListView
//     ref={el => this.lv = el}
//     dataSource={this.state.dataSource}
//     renderFooter={() => (<div style={{ textAlign: ‘center’ }}>
//     {this.state.isLoading ? ‘加载中…’ : ‘已加载全部’}
//     )}
//     renderRow={row}
//     style={{
//     height: ‘100%’,
//     overflow: ‘auto’,
//     }}
//     pullToRefresh={}
//     scrollRenderAheadDistance={500}
//     onEndReached={this.onEndReached}
//     onEndReachedThreshold={10}
//     />




//     )
//     }
