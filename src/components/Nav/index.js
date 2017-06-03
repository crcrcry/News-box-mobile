import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TabBar, Icon } from 'antd-mobile';
import Users from '../Users/';
import NewsList from '../News/NewsList/'

/* eslint global-require: 0 */

const news = require('../../static/news.png');
const selectedNews = require('../../static/selectednews.png');
const users = require('../../static/user.png');
const selectedUsers = require('../../static/selecteduser.png');


class Nav extends React.Component {
  state = {
    selectedBar: 'news'
  }

  changeBar = barValue => {
    this.setState({
      selectedBar: barValue
    });
  }

  render(){
    return(
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
      >
        <TabBar.Item
          title="用户中心"
          key="user"
          icon={users}
          selectedIcon={selectedUsers}
          selected={this.state.selectedBar === 'users'}
          onPress={this.changeBar.bind(null, 'users')}
        >
          <Users />
        </TabBar.Item>
        <TabBar.Item
          title="新闻中心"
          key="news"
          icon={news}
          selectedIcon={selectedNews}
          selected={this.state.selectedBar === 'news'}
          onPress={this.changeBar.bind(null, 'news')}
        >
          <NewsList />
        </TabBar.Item>
      </TabBar>
    )
  }
}

export default Nav;