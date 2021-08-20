import React, { Component } from 'react';
import { Icon } from 'antd-mobile';
import './index.css'
import { withRouter } from 'react-router';

class SearchBar extends Component {

  GotoSearch=()=>{
    this.props.history.push('/Search')
    // console.log(this.props);
  }  

  render() {
    return (
      <div className='BoxSearch' onClick={this.GotoSearch} id="SearchBarCss">
        <div id="BoxInput">
          <Icon type='search' span="Icon" />
          <input type="text" name="" id="homeInput" placeholder="搜索疾病/症状/医生/药品/医院" disabled />
        </div>

      </div>
    );
  }
}

export default withRouter(SearchBar);