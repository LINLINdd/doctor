import React, { Component } from 'react';
import Handbook from './Handbook';
import Navigation from './Navigation'
import PublicHealth from './PublicHealth';
import './index.css'
import SearchBar from './SearchBar'
class Health extends Component {
  render() {

    return (
      <div className='Health'>
        <SearchBar></SearchBar>
        <Navigation></Navigation>
        <h4>大众健康</h4>
        <PublicHealth></PublicHealth>
        <h4>生活手册</h4>
        <Handbook></Handbook>
        <div className='bottom'>
          <div className='bottom_title'>
            <div className='bottom_img'>
              <img src="https://z3.ax1x.com/2021/08/18/fIy9kF.png" alt="fIy9kF.png" border="0" />
            </div>
            <div className='title'>XXXX医声</div>
          </div>
          <div className='bottom_introduce'>
            <span></span>
            <div>严格质控 双重审核 专业安全</div>
            <span></span>
          </div>

        </div>

      </div>
    );
  }
}

export default Health;