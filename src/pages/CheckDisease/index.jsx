import React, { Component } from 'react';
import './index.css'
import { NavBar, Icon } from 'antd-mobile';

class CheckDisease extends Component {
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
      <div>

        <div className="conter">
          {/*标题 */}
          <div className="supportH">
             <div className="conter_head">
            <NavBar
              mode="light"
              icon={<Icon type="left" size="lg" color="#000" className="icoLeft" />}
              onLeftClick={() => console.log('onLeftClick')}
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
          <div className="RollConter">
          <div className="RollConter_left"><div>aa</div></div>
          <div className="RollConter_right"><div>bb</div></div>
          <div className="RollConter_nav"><div>bb</div></div>

          </div>
        </div>
      </div>
    );
  }
}

export default CheckDisease;