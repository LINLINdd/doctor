import React, { Component } from 'react';
import { Icon, NavBar } from 'antd-mobile';
import './index.css'
import { searchBottle, getCheckDisease } from '../../network/CheckDisease'
import BlackTop from '../../components/BlackTop'
import PullToRefresh from '../../components/PullToRefresh'
class Search extends Component {
  state = {
    BottleData: [],
    // blackTop: false
  }
  componentDidMount() {
    // this.searchBottle()
  }
  //请求
  async searchBottle() {
    const { data: res } = await searchBottle();
    console.log(res.data.items);
    this.setState({
      BottleData: this.resolveDiseaseData(res.data.items)
    })
  }
  //存储本地
  resolveDiseaseData(data) {
    let BottleData = []
    data.forEach(item => {
      BottleData = [...BottleData, item]
    })
    window.localStorage.setItem('BottleData', JSON.stringify(BottleData))
    return BottleData
  }

  //    搜索框   防抖处理
  GetSearch() {
    let finish = null
    return (e) => {
      if (e.target.value === '') {
        let BottleData = JSON.parse(window.localStorage.getItem('BottleData'))
        this.setState({
          BottleData
        })
      } else {
        if (finish) { clearTimeout(finish) }
        finish = setTimeout(() => {
          console.log('搜索了');
          this.searchBottle(e.target.value)
          finish = null
        }, 400)
      }
    }
  }

  //获取本地
  getDiseaseData() {
    let BottleData = JSON.parse(window.localStorage.getItem('BottleData'))
    if (BottleData) {
      this.setState({
        BottleData
      })
    } else {
      this.getCheckDisease()

    }
  }

  //请求
  // async searchBottle(value) {
  //   const { data: res } = await searchBottle(value, (6, 8), 1)
  //   console.log(res);
  //   // this.setState({ BottleData: res.data.items })
  // }

  render() {
    const { BottleData } = this.state
    let Bottle = () => {
      return (<ul>{
        BottleData.map((item, index) => {
          return (<li key={item.id} id={item.tag_id}>
            <span>{item.show_name}</span>
            <span className='two'>{item.company_name}</span>
          </li>)
        })
      }</ul>)
    }

    return (

      <div className='CheckbBottle'>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => this.props.history.goBack()}
          rightContent={[
          ]}
        >查药品</NavBar>
        <div className='Box1'>
          <div className="Box2Input">
            <Icon type='search' span="Icon" />
            <input type="text" name="" id="SearchInput" placeholder="搜索检查，手术词条" onKeyUp={this.GetSearch()} />
          </div>
        </div>
        
        {/* <div style={{ height: '90px' }}></div> */}
        <div className='CheckDisease_ul'>
          {/* <Bottle></Bottle> */}
          <PullToRefresh></PullToRefresh>
        </div>
        <BlackTop />
      </div>
    );
  }
}

export default Search;