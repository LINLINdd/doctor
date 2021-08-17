import React, { Component } from 'react';
import { Icon, Grid } from 'antd-mobile';
import { withRouter } from 'react-router';
import './index.css'

class SearchBar extends Component {

  GotoSearch=()=>{
    this.props.history.push('/Search')
  }

  render() {
    return (
      <div className='BoxSearch' onClick={this.GotoSearch}>
        <div id="BoxInput">
          <Icon type='search' span="Icon" />
          <input type="text" name="" id="homeInput" placeholder="搜索疾病/症状/医生/药品/医院" disabled />
        </div>

      </div>
    );
  }
}

export default withRouter (SearchBar);