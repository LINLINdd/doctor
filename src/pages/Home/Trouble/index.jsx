import React, { Component } from 'react';
import './index.css'
import { Icon } from 'antd-mobile';
import { Flex, WhiteSpace } from 'antd-mobile';
import axios from 'axios';
import { getDiseasesList } from '../../../network/Health_category'
class Trouble extends Component {
  constructor(props) {
    super(props)
    this.state = {
      DiseasesName: [],
      DiseasesList: [],
    }
  }

  componentDidMount() {
    this.getDiseasesName()
    this.getDiseasesList()

  }


  getDiseasesName = async () => {
    const { data: res } = await axios.get('http://localhost:4000/data')
    console.log(res);
    this.setState({ DiseasesName: res })
  }

  getDiseasesList = async () => {

    const { data: res } =await getDiseasesList(0, 6533, 1, 3)
    // const{data:res}=await axios.get('/apiA/app/i/ask/question/public/search?section_group_id=0&tag_id=6533&page_index=1&items_per_page=3')
    console.log(res);
    // this.setState({DiseasesList:res.data.items})
  }

  // 查看更多
  GotoTrouble = () => {
    console.log(2);
  }

  // 切换病因
  Cut = () => {
    console.log(2);
  }

  render() {
    const { DiseasesName } = this.state


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
                return <PlaceHolder className="inline" key={item.id} onClick={this.Cut} />



              })
            }

          </Flex>
        </div>

        {/* 内容2 */}
        <div className="ASK">
          {

          }
          <div className="AskList">
            <div className="AskList_head"> <i><img src="https://img1.dxycdn.com/2020/0605/837/3417351013269782963-22.png" alt="" /></i>IUIU</div>
            <div className="AskList_body">AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</div>
            <div className="AskList_foot">4月15日 06:48</div>
          </div>
        </div>

      </div>
    );
  }
}

export default Trouble;