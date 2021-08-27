import React, { Component } from 'react';
import { getVaccine } from '../../network/Health_category'
class Vaccine extends Component {
    state = {
        Vaccine: []
    }
    componentDidMount() {
        this.getVaccine()
    }
    getVaccine() {
        getVaccine().then((res) => {
            this.setState({
                Vaccine: res.data.data.items[0].page_info.img_list
            })
        })
        // this.setState({
        //     Vaccine:res.data.items[0]
        // })
    }
    render() {
        const { Vaccine } = this.state
        let Page = () => {
            return (Vaccine.map(item => {
                return <div style={{ width: '100%' }}><img style={{ width: '100%' }} src={item.img} alt="" /></div>
            }))
        }
        return (
            <div>
                <Page ></Page>
            </div>
        );
    }
}

export default Vaccine;