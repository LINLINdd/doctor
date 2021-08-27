import React, { Component } from 'react';
import { getAid } from '../../network/Health_category'
class index extends Component {
    state = {
        AidData: []
    }
    componentDidMount() {
        this.getAid()

    }
    getAid() {
        getAid().then(res => {
            this.setState({
                AidData: res.data.data.items[0].page_info.img_list
            })
        })
    }
    render() {
        const { AidData } = this.state;
        let Aid = () => {
            return (AidData.map(item => {
                return <div style={{ width: '100%' }}><img style={{ width: '100%' }} src={item.img} alt="" /></div>
            }))
        }
        return (
            <div>
                <Aid></Aid>
            </div>
        );
    }
}

export default index;