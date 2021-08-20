import React, { Component } from 'react';
import { Carousel, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import './index.css'
import {withRouter} from 'react-router'

class Slideshow extends Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
    slideIndex: 2,
  }

  constructor(props) {
    super(props);
    // window.addEventListener("touchmove",beforeChange,{passive:false})
  }
  
 componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  // 只要页面的state或者model中的state中定义的变量值发生改变，这个方法就会执行。
  componentDidUpdate() {
    if (this.state.slideIndex !== this.state.data.length - 1) {
      this.setState({ slideIndex: this.state.data.length - 1 });
    }
  }
  render() {
    return (
      <div id="slideshow">
          <WingBlank>
        <WhiteSpace />
        <Carousel
          style={{touchAction:'none'}}
          autoplay={false}
          infinite
          selectedIndex={this.state.slideIndex}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map((val, index) => (
            <a
              key={val + index}
              href="http://www.baidu.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://img1.dxycdn.com/2021/0419/698/3921739111408936743-22.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
      </div>
    );
  }
}

export default  withRouter(Slideshow);