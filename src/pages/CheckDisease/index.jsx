import React, { Component } from 'react';
import './dist/index.css'
import { NavBar, Icon } from 'antd-mobile';
import { getdocter } from '../../network/SearchContent';

class CheckDisease extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flag: true,
      sections: [ ],
      diseases:[],
      flagColor: 0

    }

  }

  componentDidMount() {
    this.getdocter()
    console.log(this.state.diseases);
  }
  getdocter = async () => {
    const { data: res } = await getdocter();
    console.log(res.data[0].diseases);
    this.setState({sections:res.data[0].sections})
    this.setState({diseases:res.data[0].diseases})
   
  }

  // 搜索
  CheckDs = () => {

  }
  //  左边点击
  Cut = (id, index) => {
    this.setState({ flagColor: index })
    
  }
  ClickD=(NameD)=>{
    this.props.history.push('./SearchContent', NameD)
  }

  render() {
    const { flag, sections, flagColor,diseases } = this.state
    return (
      <div>

        <div className="conter">
          {/*标题 */}
          <div className="supportH">
            <div className="conter_head">
              <NavBar
                mode="light"
                icon={<Icon type="left" size="lg" color="#000" className="icoLeft" />}
                onLeftClick={() => this.props.history.push('./Home')}
                rightContent={[

                ]}
              >查疾病</NavBar>
            </div>
            {/* 搜索框 */}
            <div className="conter_search">
              <div id="Box2Input">
                <Icon type='search' span="Icon" />
                <input type="text" id="SearchInput" placeholder="搜索疾病/症状/医生/药品/医院" onKeyUp={this.CheckDs()} ref={SS => this.SearchREF = SS} />
                <Icon type='cross-circle' span="Icon" className="slip" style={{ display: flag ? 'none' : 'block' }} onClick={this.slip} />
              </div>

              {/* 搜索时的页面 */}
              <div className="SearchPage" style={{ display: flag ? 'none' : 'block' }}>
                {/* <ul>
            {
              disease.map((item, index) => {
                return <li key={item.content}>{item.content}</li>
              })
            }
          </ul> */}
              </div>
            </div>
          </div>




          {/* 滚动内容 */}
          <section className='top'>
         
            <div className='left'>
              {
                sections.map((item, index) => {
                  return <div className="depart-item " key={item.id} onClick={() => { this.Cut(item.id, index) }} style={{ color: flagColor === index ? '#00c792' : '' }}>
                    <div className="depart-item-text ">{item.name}</div>
                  </div>
                })
              }
            </div>
            {/* 右边 */}
            <div className='right'>
              {
              diseases.map((item,index)=>{
                return <div className="right-item" key={item.index_name+index} >
                  <div>{item.index_name}</div>
                 {
                   item.tag_list.map((item2,index2)=>{
                     return <div key={item2.tag_id} className="Bname" onClick={()=>{this.ClickD(item2.tag_name)}}>{item2.tag_name}</div>
                   })
                 }
              </div>
              })
              }
             
            </div>
          </section>



        </div>
      </div>
    );
  }
}

export default CheckDisease;