import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, Image } from 'react-native'
import { Tabs, WhiteSpace } from 'antd-mobile';
import NewsItem from './ListItem';

const TabPane = Tabs.TabPane;
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class NewsList extends Component{
  state = {
    activeTab: 'login',
    newsType: ["推荐", "头条", "社会", "国内", "国际", "娱乐", "体育"],
    dataSource: ds.cloneWithRows([
      {
        title: '各类PC集合：台式笔记本一体机都有！',
        author: '笔记本资讯',
        time: '2017-05-06 23:46',
        imageUrl: 'https://05.imgmini.eastday.com/mobile/20170506/20170506234646_2ec406cd1bc4d07926d0042951e7fdec_4_mwpm_03200403.jpeg'
      },
      {
        title: '不再担心插不准，让你闭着眼睛都可以插对接口！！',
        author: '毒草数码',
        time: '2017-05-06 23:26',
        imageUrl: 'https://07.imgmini.eastday.com/mobile/20170506/20170506234646_debd230896d9d9356e911e2939e878f3_4_mwpm_03200403.jpeg'
      },
      {
        title: '各类PC集合：台式笔记本一体机都有！',
        author: '笔记本资讯',
        time: '2017-05-06 23:46',
        imageUrl: 'https://05.imgmini.eastday.com/mobile/20170506/20170506234646_2ec406cd1bc4d07926d0042951e7fdec_4_mwpm_03200403.jpeg'
      },
      {
        title: '不再担心插不准，让你闭着眼睛都可以插对接口！！',
        author: '毒草数码',
        time: '2017-05-06 23:26',
        imageUrl: 'https://07.imgmini.eastday.com/mobile/20170506/20170506234646_debd230896d9d9356e911e2939e878f3_4_mwpm_03200403.jpeg'
      },
    ])
  };

  handleChange = (key) => {
    // console.log('onChange', key);
  }

  handleTabClick = (key) => {
    this.setState({
      activeTab: key
    })
  }

  render(){
    const tabArr = this.state.newsType.map((item, index) => {
      return(
        <TabPane tab={item} key={item}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData)=><NewsItem data={rowData} />}
          />
        </TabPane>
      )
    })

    return(
      <Tabs
        activeKey={this.state.activeTab}
        onChange={this.handleChange}
        onTabClick={this.handleTabClick}
        animated={false}
      >
        {tabArr}
      </Tabs>
    )
  }
}

export default NewsList;
