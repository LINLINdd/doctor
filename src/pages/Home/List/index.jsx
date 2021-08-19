import React, { Component } from 'react';
import './index.css'
import { Icon } from 'antd-mobile';
import {getScience} from '../../../network/Health_category'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          id: '',
          title: '',
          cover: ''
        },
      ]
    }
  }

  componentDidMount(){
    this.getScience()
  }
//  获取科普数据
  getScience=async()=>{
    const {data:res}= await getScience(3,20,0)
    console.log(res.data.items);
    this.setState({data:res.data.items})
  }

  GotoArticl = () => {
    console.log(1);
  }
  render() {

    const {data}= this.state
    return (
      <div>
        {/* 标题 */}
        <div className="title">
          <h3>科普文章
            <span onClick={this.GotoArticl} >
              查看更多<Icon type='right' size="xs" color="#b3b3b3" />
            </span>
          </h3>
        </div>
        {/* 内容 */}
        <div className="list">

         {
              data.map((item,index)=>{
                return <div className="articl" key={item.id}>
                        <div className="artcil-left">{item.title}</div>
                        <div className="artcil-right"><img src={item.cover} alt="" /></div>
                      </div>
              })
         }
          


        </div>
      </div>

    );
  }
}

export default List;