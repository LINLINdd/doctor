import React, { Component } from 'react';
import { Icon, NavBar } from 'antd-mobile';

import './index.css'
import { searchBottle, getCheckDisease ,searchkDisease} from '../../network/CheckDisease'
import BlackTop from '../../components/BlackTop'
class Search extends Component {
  state = {
    DiseaseData: [],
    // blackTop: false
  }
  componentDidMount() {
    this.getDiseaseData()
  }
  //请求
  async getCheckDisease() {
    const { data: res } = await getCheckDisease();
    this.setState({
      DiseaseData: this.resolveDiseaseData(res.data.items)
    })
  }
  //存储本地
  resolveDiseaseData(data) {
    let DiseaseData = []
    data.forEach(item => {
      item.tag_list.forEach(item1 => {
        DiseaseData = [...DiseaseData, item1]
      })
    })
    window.localStorage.setItem('DiseaseData', JSON.stringify(DiseaseData))
    return DiseaseData
  }

  //    搜索框   防抖处理
  GetSearch() {
    let finish = null
    return (e) => {
      if (e.target.value === '') {
        let DiseaseData = JSON.parse(window.localStorage.getItem('DiseaseData'))
        this.setState({
          DiseaseData
        })
      } else {
        if (finish) { clearTimeout(finish) }
        finish = setTimeout(() => {
          console.log('搜索了');
          this.searchkDisease(e.target.value)
          finish = null
        }, 400)
      }
    }
  }

  //获取本地
  getDiseaseData() {
    let DiseaseData = JSON.parse(window.localStorage.getItem('DiseaseData'))
    if (DiseaseData) {
      this.setState({
        DiseaseData
      })
    } else {
      this.getCheckDisease()
    }
  }
  //请求
  async searchkDisease(value) {
    const { data: res } = await searchkDisease(value, (6, 8), 1)
    console.log(res);
    this.setState({ DiseaseData: res.data.items })
  }
  //节流
  throttle = (fn, delay = 1000) => {
    let timer = null;
    let firstTime = true;

    return function (...args) {
      if (firstTime) {
        // 第一次加载
        fn.apply(this, args);
        return firstTime = false;
      }
      if (timer) {
        // 定时器正在执行中，跳过
        return;
      }
      timer = setTimeout(() => {
        clearTimeout(timer);
        timer = null;
        fn.apply(this, args);
      }, delay);
    };
  }
  render() {
    const { DiseaseData, blackTop } = this.state
    let Disease = () => {
      return (<ul>{
        DiseaseData.map((item, index) => {
          return (<li key={item.tag_id} id={item.tag_id}>{item.tag_name || item.title}</li>)
        })
      }</ul>)
    }
    return (

      <div className='CheckDisease'>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => this.props.history.goBack()}
          rightContent={[

          ]}
        >辅助检查/手术</NavBar>
        {/* 搜索框 */}
        <div className='Box1'>
          <div className="Box2Input">
            <Icon type='search' span="Icon" />
            <input type="text" name="" id="SearchInput" placeholder="搜索检查，手术词条" onKeyUp={this.GetSearch()} />
          </div>
        </div>
        <div className='CheckDisease_ul'>
          <Disease ></Disease>
        </div>
        <BlackTop />
      </div>
    );
  }
}

export default Search;