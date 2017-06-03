import React, {Component} from 'react';
import {View, Text, ListView} from 'react-native'
import { Tabs, WhiteSpace } from 'antd-mobile';

const TabPane = Tabs.TabPane;
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class NewsList extends Component{
  state = {
    activeTab: 'login',
    newsType: ["推荐", "头条", "社会", "国内", "国际", "娱乐", "体育"],
    dataSource: ds.cloneWithRows([
      'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
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
    const newsItem = (rowData) => (
      <View style={{flex: 1, height: 120, flexDirection: 'row'}}>
        <View style={{flex: 3, backgroundColor: 'powderblue'}} />
        <View style={{flex: 7, backgroundColor: 'skyblue'}} >
          <Text>rowData</Text>
        </View>
      </View>
    )

    const tabArr = this.state.newsType.map((item, index) => {
      return(
        <TabPane tab={item} key={item}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={newsItem}
          />
        </TabPane>
      )
    })

    return(
      <Tabs
        activeKey={this.state.activeTab}
        barStyle={{marginTop: 17}}
        onChange={this.handleChange}
        onTabClick={this.handleTabClick}
      >
        {tabArr}
      </Tabs>
    )
  }
}

export default NewsList;
