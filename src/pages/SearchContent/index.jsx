import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import './index.css'
import SearchTabs from './SearchTabs';

class SearchContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flag: true

    }
  }

  CheckDs = () => {
    console.log(1);
  }


  render() {
    const { flag } = this.state
    return (
      <div id="SearchContent">
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
        <SearchTabs></SearchTabs>
      </div>
     
    );
  }
}

export default SearchContent;