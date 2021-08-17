import React, { Component } from 'react';
import { Grid } from 'antd-mobile';
import './index.css'





class GridOne extends Component {
  constructor(props){
    super(props)
    this.state={
     arr:[
       {id:'01',
       icon:'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
       text:'问医生'
      },
       {id:'02',
       icon:'https://img1.dxycdn.com/2020/0622/428/8789480606239050243-22.png',
       text:'特惠义诊'
      },
     ]
    }
  }
  

  render() {
    const data = this.state.arr.map((item, i) => ({
      icon: item.icon,
      text: item.text,

    }));
    return (


      <div>
            <Grid data={data} hasLine={false} columnNum={3}  />
      </div>
    );
  }
}

export default GridOne;