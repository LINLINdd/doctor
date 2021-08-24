import React, { Component } from 'react';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';

class SearchTabs extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  
  }

  render() {
    const tabs = [
      { title: <Badge >First Tab</Badge> },
      { title: <Badge >Second Tab</Badge> },
      { title: <Badge >Third Tab</Badge> },
    ];
 
    return (
      <div>
        <Tabs tabs={tabs}
          initialPage={1}
          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            Content of first tab
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            Content of second tab
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            Content of third tab
          </div>

        </Tabs>
        <WhiteSpace />

     
      </div>
    );
  }
}

export default SearchTabs;