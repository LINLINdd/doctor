import React, { Component } from 'react';
import { Grid } from 'antd-mobile';
class Navigation extends Component {
    state = {
        date: [
            { icon: 'https://z3.ax1x.com/2021/08/17/f52ItU.png', text: '查疾病' },
            { icon: 'https://z3.ax1x.com/2021/08/17/f52h7V.png', text: '查药品' },
            { icon: 'https://z3.ax1x.com/2021/08/17/f52f00.png', text: '查医院' },
            { icon: 'https://z3.ax1x.com/2021/08/17/f52Wmq.png', text: '查疫苗' },
            { icon: 'https://z3.ax1x.com/2021/08/17/f525kT.png', text: '手术检查' },
            { icon: 'https://z3.ax1x.com/2021/08/17/f52ohF.png', text: '急救指南' },
            { icon: 'https://z3.ax1x.com/2021/08/17/f527p4.png', text: '夏季指南' },
            { icon: 'https://z3.ax1x.com/2021/08/17/f52H1J.png', text: '科普视频' },
        ]
    }
    // <a href="https://imgtu.com/i/f52ItU"><img src="https://z3.ax1x.com/2021/08/17/f52ItU.png" alt="f52ItU.png" border="0"></a>
    // <a href="https://imgtu.com/i/f52h7V"><img src="https://z3.ax1x.com/2021/08/17/f52h7V.png" alt="f52h7V.png" border="0"></a>
    // <a href="https://imgtu.com/i/f52f00"><img src="https://z3.ax1x.com/2021/08/17/f52f00.png" alt="f52f00.png" border="0"></a>
    // <a href="https://imgtu.com/i/f52Wmq"><img src="https://z3.ax1x.com/2021/08/17/f52Wmq.png" alt="f52Wmq.png" border="0"></a>
    // <a href="https://imgtu.com/i/f525kT"><img src="https://z3.ax1x.com/2021/08/17/f525kT.png" alt="f525kT.png" border="0"></a>
    // <a href="https://imgtu.com/i/f52ohF"><img src="https://z3.ax1x.com/2021/08/17/f52ohF.png" alt="f52ohF.png" border="0"></a>
    // <a href="https://imgtu.com/i/f527p4"><img src="https://z3.ax1x.com/2021/08/17/f527p4.png" alt="f527p4.png" border="0"></a>
    // <a href="https://imgtu.com/i/f52H1J"><img src="https://z3.ax1x.com/2021/08/17/f52H1J.png" alt="f52H1J.png" border="0"></a>
    render() {
        const data = this.state.date.map((_val, i) => ({
            icon: _val.icon,
            text: _val.text,
        }));

        return (
            <div>
                <Grid data={data} activeStyle={false} hasLine={false}/>
            </div>
        );
    }
}

export default Navigation;