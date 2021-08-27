import React, { Component } from 'react';
import { getScienceVideo } from '../../network/Health_category'

class ScienceVideo extends Component {
    state = {
        SummerDate: []
    }
    componentDidMount() {
        this.getScienceVideo()
    }
    getScienceVideo() {
        getScienceVideo().then(res => {
            this.setState({
                SummerDate: res.data.data.items
            })
        })
    }
    render() {
        const { SummerDate } = this.state;
        let Summer = () => {
            return (SummerDate.map(item => {
                return <div style={{ display: 'flex', margin: '5px 5px' }}>
                    <div style={{ width: '80%', flex: 1 }}>
                        <p style={{ fontSize: '14px' }}>{item.title}</p>
                        <span style={{ fontSize: '12px' }}>{item.publish_time_str}</span>
                    </div>
                    <div >
                        <img style={{ width: '100%' }} src={item.pic_thumbnail_url} alt="" />
                    </div>
                </div>
            }))
        }
        return (
            <div>
                <Summer></Summer>
                {/* <div style={{ display: 'flex' }}>
                    <div >
                        <p>{item.title}</p>
                        <span>{item.publish_time_str}</span>
                    </div>
                    <div>
                        <img src={item.pic_thumbnail_url} alt="" />
                    </div>
                </div> */}
            </div>
        );
    }
}

export default ScienceVideo;