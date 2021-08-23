// import React, { Component } from 'react';
// import { ListView } from 'antd-mobile';

// class PullToRefresh extends Component {
//     constructor() {
//         super();
//         const ds = new ListView.DataSource({
//             rowHasChanged: (r1, r2) => r1 !== r2
//         });
//         this.state = {
//             page: "1", //页码
//             row: '10', // 每页条数
//             totalPage: "", //总页数
//             dataSource: ds, //长列表加载数据源
//             billData: [],  //每页数据
//             preBillData: [], //原始的订单列表
//             allBillData: [], //原始的+每一页新的数据
//             isLoading: true,  //是否加载中
//             isHasMore: false, //是否还有更多数据
//         };
//     }
//     onEndReached = () => {

//         const { page, row, totalPage, isLoading, isHasMore } = this.state

//         //当前已加载的条数小于total总条数 请求下一页数据，否则停止请求数据
//         if ((Number(page) - 1) < Number(totalPage)) {
//             this.setState({
//                 isLoading: true
//             })
//             this.getBatchData()
//         } else {
//             this.setState({
//                 isLoading: false,
//                 isHasMore: false
//             })
//         }
//     }
//     render() {
//         <ListView
//             ref={el => this.lv = el}
//             dataSource={this.state.dataSource}
//             renderFooter={() => (<div style={{ padding: 5, textAlign: 'center', fontSize: '14px' }}>
//                 {
//                     isHasMore && (isLoading ? <span className='list_loading'>加载中...</span> : '已加载')
//                 }
//                 {
//                     billData.length != 0 && (!isHasMore && '没有更多内容')
//                 }

//             </div>)}
//             renderRow={row} //每行数据渲染
//             style={{
//                 minHeight: 'calc(100vh - 20px)', //高度需要定义
//                 overflow: 'auto',
//             }}
//             pageSize={10}  //一次渲染几条数据
//             onEndReached={this.onEndReached}
//             onEndReachedThreshold={10}
//         />
//         const row = (rowData, sectionID, rowID) => {
//             return (
//                 <div>
//                     <div>{rowData.username}</div>
//                     <div>{rowData.billNo}</div>
//                     ...
//                 </div>
//             )
//         }
//     }
// }

// export default PullToRefresh;