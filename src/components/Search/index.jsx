import React, { Component } from 'react';
import { Icon } from 'antd-mobile';
import './index.css'
import { getSearchD } from '../../network/Health_category'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disease: []
    }
  }




  SearchD = (e) => {
    // console.log(e.target.value);
    this.getSearchD(e.target.value)
  }

  getSearchD = async (value) => {
    const { data: res } = await getSearchD(value);
    console.log(res);
    this.setState({ disease: res.data.items })
  }



  render() {
    const {disease}=this.state
    return (
      <div className='BoxSearch' id="SearchCss">
        {/* 搜索框 */}
        <div id="Box2Input">
          <Icon type='search' span="Icon" />
          <input type="text" name="" id="SearchInput" placeholder="搜索疾病/症状/医生/药品/医院" onInput={this.SearchD} />
        </div>

        {/* 搜索时的页面 */}
        <div className="SearchPage">
          <ul>
            {
                disease.map((item,index)=>{
                  return <li key={item.content}>{item.content}</li>
                })
            }
           
          </ul>
        </div>



      </div>
    );
  }
}

export default Search;