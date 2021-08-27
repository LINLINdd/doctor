import React, { Component } from 'react';
import { Grid } from 'antd-mobile';
import { withRouter } from 'react-router-dom'
class Navigation extends Component {
    state = {
        date: [
            { icon: 'https://z3.ax1x.com/2021/08/17/f52ItU.png', text: '查疾病', path: 'CheckDisease' },
            { icon: 'https://z3.ax1x.com/2021/08/17/f52h7V.png', text: '查药品', path: 'CheckbBottle' },
            { icon: 'https://z3.ax1x.com/2021/08/17/f52f00.png', text: '查医院', path: 'CheckbHospital' },
            { icon: 'https://z3.ax1x.com/2021/08/17/f52Wmq.png', text: '查疫苗', path: 'Vaccine' },
            { icon: 'https://z3.ax1x.com/2021/08/17/f525kT.png', text: '手术检查', path: 'Checkoperation' },
            { icon: 'https://z3.ax1x.com/2021/08/17/f52ohF.png', text: '急救指南', path: 'Aid' },
            { icon: 'https://z3.ax1x.com/2021/08/17/f527p4.png', text: '夏季指南', path: 'Summer' },
            { icon: 'https://z3.ax1x.com/2021/08/17/f52H1J.png', text: '科普视频', path: 'ScienceVideo' },
        ]
    }
    render() {
        const data = this.state.date.map((_val, i) => ({
            icon: _val.icon,
            text: _val.text,
            path: _val.path
        }));

        return (
            <div>
                <Grid data={data} activeStyle={false} hasLine={false} onClick={(el, index) => {
                    console.log(el, index);
                    this.props.history.push(`/${el.path}`)
                }} />
            </div>
        );
    }
}

export default withRouter(Navigation);