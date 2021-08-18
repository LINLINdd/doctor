import React, { Component } from 'react';
import './index.css'
import { Icon } from 'antd-mobile';


class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          id: '0001',
          title: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
          src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201605%2F10%2F20160510001106_2YjCN.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631845792&t=035db7042bd4364fb1a98e2ed71eee11'
        },
        {
          id: '0002',
          title: 'SSSSSSSSSSSSSSSSSSSSS',
          src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201605%2F10%2F20160510001106_2YjCN.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631845792&t=035db7042bd4364fb1a98e2ed71eee11'
        },
      ]
    }
  }


  GotoArticl = () => {
    console.log(1);
  }
  render() {

    const {data}= this.state
    return (
      <div>
        {/* 标题 */}
        <div className="title">
          <h3>科普文章
            <span onClick={this.GotoArticl} >
              查看更多<Icon type='right' size="xs" color="#b3b3b3" />
            </span>
          </h3>
        </div>
        {/* 内容 */}
        <div className="list">

         {
              data.map((item,index)=>{
                return <div className="articl" key={item.id}>
                        <div className="artcil-left">{item.title}</div>
                        <div className="artcil-right"><img src={item.src} alt="" /></div>
                      </div>
              })
         }
          


        </div>
      </div>

    );
  }
}

export default List;