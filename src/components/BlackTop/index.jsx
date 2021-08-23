import React, { Component } from 'react';
import './index.css'
class index extends Component {
    state = {
        blackTop: false
    }
    componentDidMount() {
        window.addEventListener('scroll', this.scrollTo);
    }
    scrollTo = () => {
        // console.log(window.scrollY);
        if (window.scrollY >= 100) {
            this.setState({
                blackTop: true
            })
        } else this.setState({
            blackTop: false
        })
    }
    render() {
    const { blackTop } = this.state

        return (
            <div className='black' style={{ display: blackTop ? 'block' : 'none' }} onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }}>
                <svg className="icon" aria-hidden="true" style={{
                    width: '22px',
                    height: '22px'
                }}>
                    <use xlinkHref='#icon-quxiaozhiding'></use>
                </svg>
            </div>
        );
    }
}

export default index;