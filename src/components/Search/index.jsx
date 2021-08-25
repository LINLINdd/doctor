import React, { Component } from 'react';
import { Icon } from 'antd-mobile';
import './index.css'
import { getSearchD } from '../../network/Health_category'
import { nanoid } from 'nanoid'

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
      historyArr: [


        { id: 'ccqweq', text: '神经病' },
        { id: 'sadad', text: '没有什么病' }
      ],
      flag: true,
      hide:true,
    }


  }


  //  挂载完成 拿localStorage 设置state
  componentDidMount() {
    console.log(this.state.flag);
    this.gethistoryData()
    this.slip()
  }

  gethistoryData() {
    let historyData = JSON.parse(localStorage.getItem("data"))
    console.log(historyData);
    if (historyData == null) {
      historyData = []
      this.setState({ historyArr: historyData })
    } else {
      this.setState({ historyArr: historyData })
    }

    // 
  }
  // 这个钩子函数在数据发生改变时就会触发 第一个参数是上一次的props，第二个参数是上一次的state
  componentDidUpdate(preProps, preState) {
    if (this.state.historyArr.length !== preState.historyArr.length) {
      localStorage.setItem('data', JSON.stringify(this.state.historyArr))
    }
  }


  //    搜索框   防抖处理
  SearchD() {

    let finish = null

    const { historyArr } = this.state
    return (e) => {
      // console.log(Boolean(finish));
      this.setState({ flag: false })
      if (finish) { clearTimeout(finish) }
      finish = setTimeout(() => {
        this.getSearchD(e.target.value)
        finish = null
      }, 400)
      if (e.keyCode == 13) {
        if (e.target.value.trim() == "") {
          alert('搜索内容不能为空')
        } else {
          // console.log(e.target.value); historyArr.unshift()

          this.setState({ historyArr: [{ id: nanoid(), text: e.target.value }, ...historyArr] })
          // console.log(this.props);
          this.props.history.push('./SearchContent',e.target.value)
        }
      }

      if (e.target.value == '') {
        this.setState({ flag: true })
      }


    }

  }

  // 请求搜索的数据
  getSearchD = async (value) => {
    const { data: res } = await getSearchD(value);
    // console.log(res);
    this.setState({ disease: res.data.items })

  }

  // 清除历搜索
  deleHistory = () => {
    this.setState({ hide: false })
    //  localStorage.clear();
  }
  BoxNO=()=>{
   
    this.setState({ hide: true })
  }
  BoxOK=()=>{
    localStorage.clear();
    let sky=[]
    this.setState({ historyArr: sky })
    this.setState({ hide: true })
  }

  // 清除搜索框内容
  slip = () => {
    this.SearchREF.value = "";
    console.log(this.SearchREF.value);
    this.setState({ flag: true })
  }

  render() {
    const { disease, iconame, flag, hot, historyArr ,hide} = this.state
    return (

      <div className='BoxSearch' id="SearchCss">
        {/* 弹窗 */}
        <div className="advertising" style={{ display: hide ? 'none' : 'block' }} >
          <div className="advertisingBox">
            <div className="advertisingBoxCent">确定删除全部历史记录么</div>
            <div className="advertisingBoxBtn">
              <div className="BoxNo" onClick={this.BoxNO}>取消</div>
              <div className="BoxOk" onClick={this.BoxOK}>确定</div>
            </div>
          </div>
        </div>


        {/* 搜索框 */}
        <div id="Box2Input">
          <Icon type='search' span="Icon" />
          <input type="text"  id="SearchInput" placeholder="搜索疾病/症状/医生/药品/医院" onKeyUp={this.SearchD()} ref={SS => this.SearchREF = SS} />
          <Icon type='cross-circle' span="Icon" className="slip" style={{ display: flag ? 'none' : 'block' }} onClick={this.slip} />
        </div>

        {/* 搜索时的页面 */}
        <div className="SearchPage" style={{ display: flag ? 'none' : 'block' }}>
          <ul>
            {
              disease.map((item, index) => {
                return <li key={item.content}>{item.content}</li>
              })
            }

          </ul>
        </div>

        {/* 搜索框下的页面 */}
        <div id="InputDowm" >
          <div className="box" style={{ display: flag ? 'block' : 'none' }}>

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
                    return [0, 1].includes(index) ? <span key={item.text}>
                      <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-huo"></use>
                      </svg>{item.text}</span> : <span key={item.text}>{item.text}</span>
                  })
                }

              </div>
            </div>

            {/* 搜索历史 */}

            <div className="history">
              {/* 标题 */}
              <div className="parttwo">
                <h2>
                  <span>
                    历史搜索
                  </span>
                  <i onClick={this.deleHistory}>
                    <svg className="icon" aria-hidden="true" id="h2Icon">
                      <use xlinkHref="#icon-shanchu3"></use></svg>
                  </i>
                </h2>
              </div>
              {/* 历史内容 */}
              <div className="partthree">
                <div className="hotword">
                  {
                    historyArr.map((item, index) => {
                      return <span key={item.id}>{item.text}</span>
                    })
                  }

                </div>
              </div>

            </div>


          </div>
        </div>


      </div>
    );
  }
}

export default Search;