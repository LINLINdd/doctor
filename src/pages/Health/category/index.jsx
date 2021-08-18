import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import './index.css'
import axios from 'axios';
import { getHealth_category } from '../../../network/Health_category'
class category extends Component {
    state = {
        title: '随便意思意思'
    }
    componentDidMount() {
        this.getHealth_category()
    }
    getHealth_category = async () => {
        // app/i/ask/healthwiki/feed?items_per_page=10&page_index=2&tag_id=0&category_tag_id=24824
        // const res = await getHealth_category(10, 3, 0, 24824)
        // console.log(res);

        // DOTCOM_CSRFTOKEN=648ac870-e9b8-4b35-9935-e40e8d21ba55  Cookie

        const reD = await axios({
            method: 'get',
            url: "/apiA/app/i/ask/healthwiki/feed?items_per_page=10&page_index=1&tag_id=25281&category_tag_id=24824",
            timeout: 5000,
            withCredentials: true,
            headers: {
                // 'Authorization': 'DOTCOM_CSRFTOKEN=84e7143a-5dd4-43d6-9eca-f3044accce2c',
                // // 'authority ': 'dxy.com',
                // 'path': '/app/i/ask/healthwiki/feed?items_per_page=10&page_index=2&tag_id=0&category_tag_id=24821',
                // 'scheme': 'https',
                // 'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                'Cookie': 'DOTCOM_CSRFTOKEN=84e7143a-5dd4-43d6-9eca-f3044accce2c'
            }
        })
        console.log(reD);
    }
    render() {
        const { title } = this.state
        return (
            <div className='category'>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >{title}</NavBar>
                <main className='cate_main'>
                    <div className='Related'>
                        <div className='Related_header'>
                            <div className='Related_H'>相关疾病</div>
                            <span><a href="">查看全部<Icon type="right" size='xs' /></a></span>
                        </div>
                        <div className='Related_ul'>
                            <ul>
                                <li><span>高血压</span></li>
                                <li><span>高血压</span></li>
                                <li><span>高血压</span></li>
                                <li><span>高血压</span></li>
                                <li><span>高血压</span></li>
                                <li><span>高血压</span></li>
                            </ul>
                        </div>
                    </div>
                </main>
                <div className='Problem'>
                    <h1>问题</h1>
                </div>
            </div>
        );
    }
}

export default category;