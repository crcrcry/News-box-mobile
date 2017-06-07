import React from 'react';
import { View, Text, ListView } from 'react-native';
import { Tabs, WhiteSpace } from 'antd-mobile';
import Register from './Register/';
import Login from './Login/';
import Setting from './Setting/';

const TabPane = Tabs.TabPane;

class Users extends React.Component {
  state = {
    activeTab: 'login',
  };

  handleChange = (key) => {

  }

  handleTabClick = (key) => {
    this.setState({
      activeTab: key
    })
  }

  render(){
    return(
      <Tabs
        activeKey={this.state.activeTab}
        defaultActiveKey='login'
        onChange={this.handleChange}
        onTabClick={this.handleTabClick}
        animated={false}
        barStyle={{marginTop: 17}}
      >
        <TabPane tab="注册" key="register">
          <Register />
        </TabPane>
        <TabPane tab="登录" key="login">
          <Login />
        </TabPane>
        <TabPane tab="个人设置" key="setting">
          <Setting />
        </TabPane>
      </Tabs>
    )
  }
}

export default Users;