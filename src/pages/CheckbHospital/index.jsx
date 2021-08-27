import React, { Component, Fragment } from 'react';
import { Icon, NavBar } from 'antd-mobile';
import './index.css'
import { getbHospitalt, } from '../../network/CheckDisease'
import { getpositioning } from '../../network/positioning'
import PullToRefresh from './PullToRefresh'
import store from '../../redux/store'
import { getposition, getplacename } from '../../redux/actions/msg'
import { CheckHospital1 } from '../../redux/actions/CheckHospital'
class Search extends Component {
  state = {
    BottleData: [],
    // blackTop: false
    openMeng: false,
    left: [],
    right1: [],
    top: [],
    firstArr: [],
    Municipal: null
  }

  componentDidMount() {
    this.getbHospitalt()
    this.getPositioning()
  }

  //请求
  async getbHospitalt() {
    const { data: res } = await getbHospitalt();
    // console.log(res.data.items);
    this.setState({
      firstArr: res.data.items
    })
  }
  async getbHospitalt() {
    const { data: res } = await getbHospitalt();
    this.setState({
      firstArr: res.data.items
    })
  }
  async getPositioning() {
    const { data: res } = await getpositioning()
    this.setState({
      top: res,
      right1: res[0].children
    })
  }

  GetSearch() {
    let finish = null
    return (e) => {
      console.log(e.target.value);
      if (e.target.value === '') {
        let Bhospital = JSON.parse(window.localStorage.getItem('Bhospital'))
        this.setState({
          Bhospital
        })
      } else {
        if (finish) { clearTimeout(finish) }
        finish = setTimeout(() => {
          console.log('搜索了');
          store.dispatch(CheckHospital1(e.target.value))
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
  getMunicipal(id) {
    this.setState({
      openMeng: false
    })
    console.log(id.target.innerText);
    store.dispatch(getposition(id.target.id))
    store.dispatch(getplacename(id.target.innerText))

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
    const { firstArr, openMeng, top, right1, Municipal } = this.state
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
          return (<div key={item.id || 1 + index} className="right-item">
            <div id={item.id} onClick={(e) => {
              this.getMunicipal(e)
            }} >{item.name}</div>
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
        >查医院</NavBar>
        <div className='Box1'>
          <div className="Box2Input">
            <Icon type='search' span="Icon" />
            <input type="text" name="" id="SearchInput" placeholder="查医院" onKeyUp={this.GetSearch()} />
          </div>
        </div>

        {/* <div style={{ height: '90px' }}></div> */}
        <div className='CheckDisease_ul'>

          <PullToRefresh open={this.open} Municipal={Municipal} firstArr={firstArr}></PullToRefresh>
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