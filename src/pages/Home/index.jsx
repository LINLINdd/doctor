import React, { Component } from 'react';
import SearchBar from './SearchBar';
import 'antd-mobile/dist/antd-mobile.css';
import GridOne from './GridOne';
import GridTwo from './GridTwo';
import Slideshow from './Slideshow';
import List from './List';
import Trouble from './Trouble';

class index extends Component {
    render() {
        return (
            <div>
             
                <SearchBar></SearchBar>
                <GridOne></GridOne>
                <GridTwo></GridTwo>
                <Slideshow></Slideshow>
                <List></List>
                <Trouble></Trouble>
            </div>
        );
    }
}

export default index;