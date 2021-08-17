import React, { Component } from 'react';
import { Grid } from 'antd-mobile';




const data = Array.from(new Array(3)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}));

class GridOne extends Component {
    constructor(props){
      
    }

  render() {
    return (
      <div>
       
            <Grid data={data} hasLine={false} columnNum={3} />
      </div>
    );
  }
}

export default GridOne;