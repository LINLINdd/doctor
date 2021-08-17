import React, { Component } from 'react';
import SearchBar from './SearchBar';
import 'antd-mobile/dist/antd-mobile.css';
import GridOne from './GridOne';

class index extends Component {
    render() {
        return (
            <div>
             
                <SearchBar></SearchBar>
                <GridOne></GridOne>
            </div>
        );
    }
}

export default index;