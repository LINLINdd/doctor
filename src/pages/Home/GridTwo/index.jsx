import React, { Component } from 'react';
import './index.css'
import { Grid } from 'antd-mobile';

class GridTwo extends Component {
  constructor(props){
    super(props)
    this.state={
      arr:[
           {
             id:'001',
             icon:'https://img1.dxycdn.com/2020/0622/267/4682954758695450243-22.png',
             text:'查疾病'
            }
      ]
    }
  }
  
  render() {
    const{arr}=this.state
    const data = arr.map((item, i) => ({
      icon: item.icon,
      text: item.text,
    }));
    return (
      <div id="GTwo">
        <Grid data={data} hasLine={false}  columnNum={4} />
      </div>
    );
  }
}

export default GridTwo;