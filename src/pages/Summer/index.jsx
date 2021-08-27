import React, { Component } from 'react';
import { getSummer } from '../../network/Health_category'

class Summer extends Component {
    state = {
        SummerDate: []
    }
    componentDidMount() {
        this.getSummer()
    }
    getSummer() {
        getSummer().then(res => {
            this.setState({
                SummerDate: res.data.data.items[0].page_info.img_list
            })
        })
    }
    render() {
        const { SummerDate } = this.state;
        let Summer = () => {
            return (SummerDate.map(item => {
                return <div style={{ width: '100%' }}><img style={{ width: '100%' }} src={item.img} alt="" /></div>
            }))
        }
        return (
            <div>
                <Summer></Summer>
            </div>
        );
    }
}

export default Summer;