import React, { Component } from 'react';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import './dist/index.css'
import { getMedicine } from '../../../network/SearchContent';

class SearchTabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabs: [
        { title: <Badge >推荐</Badge> },
        { title: <Badge >医生</Badge> },
        { title: <Badge >医院</Badge> },
        { title: <Badge >药品</Badge> },
      ],
      medicine: [],
      jjjjj: 0
    }

  }
  componentDidMount() {
    console.log(this);
  }
  cut = (index) => {
     this.setState({jjjjj:index})
    if (index == 3) {
      console.log(11);
      let DiseaseValue = this.props.DiseaseValue
      console.log(DiseaseValue);
      this.getMedicine(DiseaseValue)
     
    }


  }
  getMedicine = async (value) => {
    let { data: res } = await getMedicine(value);
    console.log(res.data.items);
    this.setState({ medicine: res.data.items })
  }

  render() {

    const { tabs, medicine, jjjjj } = this.state
    let Recommend = () => {
      return (
        <div>
          <div className="panel-title">科普文章</div>
          {
            this.props.list.map((item, index) => {
              return <div className="search-relative-article" key={item.id}>
                <div className="article">

                  <div className="article-left">
                    <div>
                      <div className="high-light">{item.article_title_highlight}</div>
                      <div className="high-light2">{item.search_content_highlight}</div>
                    </div>
                  </div>

                  <div className="article-right">
                    <img src={item.cover_small} alt="" className="article-right-img" />
                  </div>
                </div>

              </div>
            })
          }
          <div className="panel-title">公开问题</div>
          {
            this.props.list2.map((item, index) => {
              return <div className="AskList" key={item.id}>
                <div className="AskList_head"> <i><img src="https://img1.dxycdn.com/2020/0605/837/3417351013269782963-22.png" alt="" /></i>{item.anonymous_name}</div>
                <div className="AskList_body">{item.question_highlight}</div>
              </div>
            })
          }

        </div>

      )
    }

    let MedicineList = () => {
      return (<div>
        {
          medicine.map((item, index) => {
            return <a href="" className="drug-item" key={item.id}>
              <div className="common-cell common-cell-large">
                <div className="common-cell-title">
                  <div className="common-cell-text-title" >{item.brand_name}&nbsp {item.common_name}</div>
                  <div className="common-cell-text-sub ellipsis-2">{item.company_name}</div>
                </div>
              </div>
            </a>
          })
        }
      </div>

      )
    }
    return (
      <div id="SearchTabs">
        <Tabs tabs={tabs}
          initialPage={0}
          className={"tabls"}
          onChange={(tab, index) => { this.cut(index) }}
        // onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >
          {
            tabs.map((item, index) => {
              return <div key={item.title} style={{ backgroundColor: '#fff' }}>
                <div className="panel">
              
                  {/* {( this.state.jjjjj == 0 ? <Recommend /> : '')}
                  {( this.state.jjjjj == 3 ? <MedicineList /> : '')} */}
                </div>
              </div>
            })
          }




        </Tabs>
        <WhiteSpace />


      </div>
    );
  }
}

export default SearchTabs;