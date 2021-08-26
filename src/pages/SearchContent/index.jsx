import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import './index.css'
import SearchTabs from './SearchTabs';
import { getSearchContent } from '../../network/SearchContent';

class SearchContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flag: true,
      DiseaseValue: '',
      DiseaseDetail:[],
      DiseaseDetail2:[],
    
    }

  }

  componentDidMount() {
    let DValue = this.props.location.state
    this.setState({ DiseaseValue: DValue })
    this.getSearchContent(DValue)
  }
  getSearchContent = async (Q) => {
    let { data: res } = await getSearchContent(Q)
    // console.log(res.data.items[1].ask_questions);
    this.setState({DiseaseDetail:res.data.items[0].articles,DiseaseDetail2:res.data.items[1].ask_questions})
    if(this.state.DiseaseDetail==undefined){
      this.props.history.push('./home')
    }
    console.log(this.state.DiseaseDetail);
    console.log(this.state.DiseaseDetail2);
  }

  SearchD() {
    return (e) => {   
      if (e.target.value == '') {
        this.props.history.push('./Search')
      }
    }
  }


  render() {
    const { flag } = this.state
    const { DiseaseValue } = this.state


    return (
      <div id="SearchContent">
        {/* 搜索框 */}
        <div className="conter_search">
          <div id="Box2Input">
            <Icon type='search' span="Icon" />
            <input type="text" id="SearchInput" defaultValue={DiseaseValue} placeholder="搜索疾病/症状/医生/药品/医院" onInput={this.SearchD()} ref={SS => this.SearchREF = SS} />
            
          </div>
        </div>
        <SearchTabs list={this.state.DiseaseDetail} 
                    list2={this.state.DiseaseDetail2}
                    DiseaseValue={this.state.DiseaseValue}
                     ></SearchTabs>
      </div>

    );
  }
}

export default SearchContent;