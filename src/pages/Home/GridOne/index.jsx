import React, { Component } from 'react';
import { Grid } from 'antd-mobile';
import './index.css'
import {getGridone} from '../../../network/home'




class GridOne extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: [
        {id: '01', icon: 'https://z3.ax1x.com/2021/08/19/fHaDvq.png', text: '问医生',
        text2:'按科室找医生' },
        {id: '02', icon: 'https://z3.ax1x.com/2021/08/19/fHayrV.png', text: '特惠义诊',
        text2:'问诊一元起'
       },
        {id: '03', icon: 'https://z3.ax1x.com/2021/08/19/fHasK0.png', text: '电话急诊',
        text2:'一对一电话咨询'
       },
      ]
    }
  }
    

   componentDidMount() {
    this.getGridone()
   }
   getGridone= async()=>{
     const{data:res}= await getGridone();
     this.setState({})
   }


      render() {
    const data1 = this.state.arr.map((item, i) => ({
        icon: item.icon,
      text: item.text,
      text2:item.text2,

    }));
      return (


      <div id="GridOneCss">
        <Grid data={data1}
          hasLine={false}
          columnNum={3}
          renderItem={dataItem => (
            <div style={{ padding: '12.5px' }}>
              <img className="ico" src={dataItem.icon} alt="" />
              <div className="spanBox">
                <span className="spanOne">{dataItem.text}</span><br></br>
                <span className="spanTwo">{dataItem.text2}</span>
              </div>
            </div>
          )}
        />
      </div>
      );
  }
}

      export default GridOne;