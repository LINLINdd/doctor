import React, { Component } from 'react';
class Set extends Component {
    state = {
        src: ''
    }
    handleFileImg = () => {
        let selected_file = this.refs.img.files[0];
        window.URL = window.URL || window.webkitURL;
        console.log(window.URL);
        let img = window.URL.createObjectURL(selected_file)
        this.setState({ src: img })
    }
    render() {
        const { src } = this.state
        return (
            <div>
                <div>
                    医生一号
                    <input type="file" name="image" accept='image/*' ref='img' onChange={() => {
                        this.handleFileImg()
                    }} />
                    <div><img src={src} alt="" /></div>
                </div>
            </div>
        );
    }
}

export default Set;