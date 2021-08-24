import React, { Component } from 'react';
import './index.css'
import { Grid } from 'antd-mobile';
import { getDiseasesName } from '../../../network/home';
import { withRouter } from 'react-router-dom';


class GridTwo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: [
        // { id: '001', icon: 'https://z3.ax1x.com/2021/08/19/fH12U1.png', text: '查疾病' },
        // { id: '002', icon: 'https://z3.ax1x.com/2021/08/19/fH1fC6.png', text: '找医院' },
        // { id: '003', icon: 'https://z3.ax1x.com/2021/08/19/fH1h8K.png', text: '名医问答' },
        // { id: '004', icon: 'https://z3.ax1x.com/2021/08/19/fH1R4x.png', text: '健康百科' },


      ]
    }
  }

  // http://120.27.146.2:1004/getDiseasesName
  componentDidMount() {
      this.getDiseasesName()
  }

  getDiseasesName=async()=>{
    const{data:res}=await getDiseasesName()
    this.setState({arr:res.data})
  }


  GoHealth=()=>{
     this.props.history.push('/CheckDisease')
   
  }
  

  render() {
    const { arr } = this.state
    const data = arr.map((item, i) => ({
      icon: item.icon,
      text: item.text,
    }));
    return (
      <div id="GTwo">
        <Grid data={data} hasLine={false} columnNum={4} onClick={this.GoHealth}/>
      </div>
    );
  }
}

export default withRouter(GridTwo);