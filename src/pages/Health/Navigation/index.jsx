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
    render() {
        const data = this.state.date.map((_val, i) => ({
            icon: _val.icon,
            text: _val.text,
        }));

        return (
            <div>
                <Grid data={data} activeStyle={false} hasLine={false} onClick={(el, index) => {
                    console.log(el, index);
                }} />
            </div>
        );
    }
}

export default Navigation;