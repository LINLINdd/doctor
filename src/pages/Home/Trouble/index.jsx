import React, { Component } from 'react';
import './index.css'
import { Icon } from 'antd-mobile';
import { Flex, WhiteSpace } from 'antd-mobile';
import axios from 'axios';
import { getDiseasesList } from '../../../network/Health_category'
import { getProblem } from '../../../network/home'

class Trouble extends Component {
 
  constructor(props) {
    super(props)  
    this.state = {
      DiseasesName: [],
      DiseasesList: [],
      flagColor : ''
    }
  }

  componentDidMount() {
   
    this.getDiseasesList()
    this.getProblem()
  }

  
// http://120.27.146.2:1004/getGridTwo
// 公开问题的病型
getProblem = async () => {
  let {data:res} = await getProblem()
  console.log(res);
    this.setState({ DiseasesName: res.data })
  }
// 公开问题的病情
  getDiseasesList = async (id=732) => {
    
    let { data: res } = await getDiseasesList(0, id, 1, 3)

    this.setState({ DiseasesList: res.data.items })
  }

  // 查看更多
  GotoTrouble = () => {
    console.log(2);
  }

  // 切换病因 颜色
  Cut = (id,index) => {
    this.getDiseasesList(id)
    console.log(id);
    this.setState({flagColor:index})
  }

  render() {
    const { DiseasesName } = this.state
    const { DiseasesList } = this.state
    const { flagColor }    = this.state
    return (
      <div id="troubleBox">
        {/* 标题 */}
        <div className="trouble">
          <h3>公开问题
            <span onClick={this.GotoTrouble} >
              查看更多<Icon type='right' size="xs" color="#b3b3b3" />
            </span>
          </h3>
        </div>

        {/* 内容1 */}
        <div className="diseases">
          <Flex justify="start" wrap="wrap">
            {
              DiseasesName.map((item, index) => {
                const PlaceHolder = ({ className = '', ...restProps }) => (
                  <div className={`${className} placeholder`} {...restProps}><span className="SpanDisease">{item.name}</span></div>
                );
                return <PlaceHolder 
                          className="inline" key={item.id} 
                          style={{color:flagColor===index?'#00c792':''}}
                          onClick={()=>{
                            this.Cut(item.id,index)
                          }}  
                          />
                      
              })
            }

          </Flex>
        </div>

        {/* 内容2 */}
        <div className="ASK">
          {
            DiseasesList.map((item, index) => {
              return <div className="AskList" key={item.id}>
                <div className="AskList_head"> <i><img src="https://img1.dxycdn.com/2020/0605/837/3417351013269782963-22.png" alt="" /></i>{item.anonymous_name}</div>
                <div className="AskList_body">{item.content}</div>
                <div className="AskList_foot">{item.create_time_str}</div>
              </div>
            })
          }
     
     

        </div>

      </div>
    );
  }
}

export default Trouble;