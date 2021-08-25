import React, { Component, Fragment } from 'react';
import { Icon, NavBar } from 'antd-mobile';
import './index.css'
import { getbHospitalt, getCheckDisease } from '../../network/CheckDisease'
import { getpositioning } from '../../network/positioning'
import PullToRefresh from './PullToRefresh'
class Search extends Component {
  state = {
    BottleData: [],
    // blackTop: false
    openMeng: false,
    left: [],
    right1: [],
    top: [],
  }
  componentDidMount() {
    this.getbHospitalt()
    this.getPositioning()
  }
  //请求
  async getbHospitalt() {
    const { data: res } = await getbHospitalt();
    console.log(res.data.items);
    this.setState({
      BottleData: this.resolveDiseaseData(res.data.items)
    })
  }
  async getPositioning() {
    const { data: res } = await getpositioning()
    console.log(res);
    this.setState({
      top: res,
      right1: res[0].children
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


  getRegion(id) {
    const data = this.state.top
    let Region
    if (id.target.id === '') {
      Region = [data[0]]
    } else {
      Region = data.filter(item => {
        return item.id === id.target.id
      })
    }
    Region = Region[0].children
    this.setState({
      right1: Region
    })
  }
  //请求
  // async searchBottle(value) {
  //   const { data: res } = await searchBottle(value, (6, 8), 1)
  //   console.log(res);
  //   // this.setState({ BottleData: res.data.items })
  // }
  open = () => {
    console.log('打开了');
    this.setState({
      openMeng: true
    })
  }
  msg = () => {
    console.log(1111);
  }
  render() {
    const { BottleData, openMeng, top, right1 } = this.state
    let Left_1 = () => {
      return (<Fragment>
        {top.map((item, index) => {
          return (<div key={item.id || 1 + index} className={"depart-item"}>
            <div id={item.id} className="depart-item-text" onClick={(e) => {
              this.getRegion(e)
            }}>{item.name}</div>
          </div>)
        })}
      </Fragment>)
    }
    let Right_1 = () => {
      return (
        right1.map((item, index) => {
          return (<div key={item.id || 1 + index} id={item.id} className="right-item" onClick={(e) => {
            console.log(e.target.id);
          }}>
            <div>{item.name}</div>
          </div>)
        })
      )
    }
    return (

      <div className='CheckbHospital'>
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

          <PullToRefresh open={this.open}></PullToRefresh>
        </div>
        {/* <BlackTop /> */}
        <div className='meng' style={{ display: openMeng ? 'block' : 'none' }} onClick={this.props.click}>
          <NavBar
            mode="light"
            icon='取消'
            onLeftClick={() => this.setState({
              openMeng: false
            })}
            rightContent={[
            ]}
          >选择地区</NavBar>
          <section className='top'>
            <div className='left'>
              {/* <div className="depart-item active">
                <div className="depart-item-text">热门地区</div>
              </div> */}
              <Left_1></Left_1>
            </div>
            <div className='right'>
              {/* <div className="right-item">
                <div>同城（定位失败）</div>
              </div> */}
              <Right_1></Right_1>
            </div>
          </section>
          {/* <Menu msg={this.state.openMeng}></Menu> */}
        </div>
      </div>
    );
  }
}

export default Search;