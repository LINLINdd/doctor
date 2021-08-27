import React, { Component } from 'react';
import SearchBar from './SearchBar';
import 'antd-mobile/dist/antd-mobile.css';
import GridOne from './GridOne';
import GridTwo from './GridTwo';
import Slideshow from './Slideshow';
import List from './List';
import Trouble from './Trouble';
import BlackTop from '../../components/BlackTop';
import './index.css'
class index extends Component {
    render() {
        return (
            <div id="homeBox">

                <SearchBar></SearchBar>
                <GridOne></GridOne>
                <GridTwo></GridTwo>
                <Slideshow></Slideshow>
                <List></List>
                <Trouble></Trouble>
                <BlackTop></BlackTop>
            </div>
        );
    }
}

export default index;