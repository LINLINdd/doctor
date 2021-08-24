import React, { Component } from 'react';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import './index.css'
class SearchTabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabs:[
        { title: <Badge >推荐</Badge> },
        { title: <Badge >医生</Badge> },
        { title: <Badge >医院</Badge> },
        { title: <Badge >药品</Badge> },
      ]
    }
  
  }

  render() {
    // const tabs = [
    //   { title: <Badge >推荐</Badge> },
    //   { title: <Badge >医生</Badge> },
    //   { title: <Badge >医院</Badge> },
    //   { title: <Badge >药品</Badge> },
    // ];
  const{tabs}=this.state
    return (
      <div id="SearchTabs">
        <Tabs tabs={tabs}
          initialPage={1}
          className={"tabls"}
          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >
          {
            tabs.map((item,index)=>{
              return <div key={item.title} style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#fff' }}> 
                <div className="panel">
                {/* <div className="panel-title">科普文章</div> */}
                aa
                </div>
            </div>
            })
          }
          

  

        </Tabs>
        <WhiteSpace />

     
      </div>
    );
  }
}

export default SearchTabs;