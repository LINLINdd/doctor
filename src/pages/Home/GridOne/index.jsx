import React, { Component } from 'react';
import { Grid } from 'antd-mobile';
import './index.css'
import {getGridone} from '../../../network/home'
import { withRouter } from 'react-router-dom';
// import { aysncAction } from '../../../redux/actions/gridone';
// import store from '../../../redux/store'




class GridOne extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: []
    }

  }


  componentDidMount() {
    // this.aysncAction22()
    this.getGridone()
    // 定阅
    // this.unsubscribe=store.subscribe(() => {
    //   // console.log("res---xxx",store.getState());
    //   this.setState({ arr: store.getState() })
    // })
    // store.dispatch(aysncAction())
  }


  componentWillUnmountn() {
    // this.unsubscribe();
  }


  aysncAction22 = () => {
    // store.dispatch(aysncAction(this.setState({arr:res.data})))
  }


  getGridone = async () => {
    let { data: res } = await getGridone();
    console.log(res)
    this.setState({ arr: res.data })
  }

  GoAskDoctor = (e, index) => {
    if (index == 0) {
      this.props.history.push('/AskDoctor')
    }


  }

  render() {
    const data1 = this.state.arr.map((item, i) => ({
      icon: item.icon,
      text: item.text,
      text2: item.text2,

    }));
    return (


      <div id="GridOneCss" >
        <Grid data={data1}
          hasLine={false}
          onClick={this.GoAskDoctor}
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

export default withRouter(GridOne);