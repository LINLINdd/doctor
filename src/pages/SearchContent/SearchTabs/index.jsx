import React, { Component } from 'react';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import './dist/index.css'
class SearchTabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabs: [
        { title: <Badge >推荐</Badge> },
        { title: <Badge >医生</Badge> },
        { title: <Badge >医院</Badge> },
        { title: <Badge >药品</Badge> },
      ],

    }

  }
  componentDidMount() {
    console.log(this.props.list);
  }
  
  render() {

    const { tabs } = this.state
    return (
      <div id="SearchTabs">
        <Tabs tabs={tabs}
          initialPage={1}
          className={"tabls"}
          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >
          {
            tabs.map((item, index) => {
              return <div key={item.title} style={{ backgroundColor: '#fff' }}>
                <div className="panel">
                  <div className="panel-title">科普文章</div>

                  {
                      this.props.list.map((item,index)=>{
                        return  <div className="search-relative-article">
                        <div className="article">
  
                          <div className="article-left">
                            <div>
                              <div className="high-light">bbb<em>神经病 </em></div>
                              <div className="high-light2">bbbbbbbbbbBBBBBBBBbbbb</div>
                            </div>
                          </div>
  
                          <div className="article-right">
                            <img src="https://img1.dxycdn.com/2017/1107/624/3242747211676161403-15.jpeg" alt="" className="article-right-img" />
                          </div>
                        </div>
  
                      </div>
                      })
                   
                  }



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