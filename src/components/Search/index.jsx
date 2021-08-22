import React, { Component } from 'react';
import { Icon } from 'antd-mobile';
import './index.css'
import { getSearchD } from '../../network/Health_category'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disease: [],
      iconame: [
        { CName: 'sl', CName2: '#icon-yisheng', text: '医生' },
        { CName: 'sc', CName2: '#icon-yiyuan', text: '医院' },
        { CName: 'sr', CName2: '#icon-yaopin', text: '药品' },
      ],
      hot: [
        { text: '疫情地图' },
        { text: '出行政策' },
        { text: '失眠' },
        { text: '怀孕小能手' },
        { text: '码农怎么挂B的' },
      ],
      historyArr:[
        {}
      ],
      flag: true
    }
  }


  // SearchD = (e) => {
  //   // console.log(e.target.value);
  //   this.getSearchD(e.target.value)
  // }

  //    搜索框   防抖处理
  SearchD() {
    let finish = null
    this.state.flag = false

    return (e) => {
      // console.log(Boolean(finish));
      if (finish) { clearTimeout(finish) }
      finish = setTimeout(() => {
        this.getSearchD(e.target.value)
        finish = null
      }, 400)
      if (e.keyCode == 13) {
        console.log(1);
      }
      if (e.target.value == '') {
        this.state.flag = true
      }
    }

  }

  // 请求搜索的数据
  getSearchD = async (value) => {
    const { data: res } = await getSearchD(value);
    // console.log(res);
    this.setState({ disease: res.data.items })
  }



  render() {
    const { disease } = this.state
    const { iconame } = this.state
    const { flag } = this.state
    const { hot } = this.state
    return (
      <div className='BoxSearch' id="SearchCss">
        {/* 搜索框 */}
        <div id="Box2Input">
          <Icon type='search' span="Icon" />
          <input type="text" name="" id="SearchInput" placeholder="搜索疾病/症状/医生/药品/医院" onKeyUp={this.SearchD()} />
        </div>

        {/* 搜索时的页面 */}
        <div className="SearchPage">
          <ul>
            {
              disease.map((item, index) => {
                return <li key={item.content}>{item.content}</li>
              })
            }

          </ul>
        </div>

        {/* 搜索框下的页面 */}
        <div id="InputDowm" style={{ display: flag ? 'block' : 'none' }}>
          <div className="box">

            {/* 3个图标 */}
            <div className="partone">
              {
                iconame.map((item, index) => {
                  return <div className={"part" + ' ' + (item.CName)} key={item.CName2}>
                    <div className="iback">
                      <svg className="icon" aria-hidden="true">
                        <use xlinkHref={item.CName2}></use>
                      </svg>
                    </div>
                    <span className="ysSpan">{item.text}</span>
                  </div>
                })
              }
            </div>

            {/* 热门搜索 */}
            <div className="parttwo">
              <h2>热门搜索</h2>
            </div>

            {/* 热门搜索内容 */}
            <div className="partthree">
              <div className="hotword">
                {
                  hot.map((item, index) => {
                    return [0,1].includes(index)? <span key={item.text}>
                      <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-huo"></use>
                      </svg>{item.text}</span> : <span key={item.text}>{item.text}</span>
                  })
                }
                {/* <span>
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-huo"></use>
                  </svg>疫情地图</span>

                <span><svg className="icon" aria-hidden="true" >
                  <use xlinkHref="#icon-huo"></use>
                </svg>出行政策</span>
                <span>失眠</span>
               
                <span>孕育管家</span> */}
              </div>
            </div>

            {/* 搜索历史 */}

            <div className="history">

              <div className="parttwo">
                <h2> 
                  <span>
                    历史搜索 
                  </span>
                  <i>
                    <svg className="icon" aria-hidden="true" id="h2Icon">
                  <use xlinkHref="#icon-shanchu3"></use></svg>
                  </i>     
                </h2>
              </div>



            </div>


          </div>
        </div>

      </div>
    );
  }
}

export default Search;