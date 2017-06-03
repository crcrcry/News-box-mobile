import React from 'react';
import { View, Text, ListView } from 'react-native';
import { Tabs, WhiteSpace } from 'antd-mobile';

const TabPane = Tabs.TabPane;
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class Users extends React.Component {
  state = {
    activeTab: 'login',
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
    return(
      <Tabs
        activeKey={this.state.activeTab}
        barStyle={{marginTop: 17}}
        onChange={this.handleChange}
        onTabClick={this.handleTabClick}
      >
        <TabPane tab="注册" key="register">
          <ListView
            style={{ width: '100%', height: '100%' }}
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text style={{padding: 30}}>{rowData}</Text>}
          />
        </TabPane>
        <TabPane tab="登录" key="login">
          <ListView
            style={{ width: '100%', height: '100%' }}
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text style={{padding: 30}}>{rowData}</Text>}
          />
        </TabPane>
        <TabPane tab="个人设置" key="setting">
          <ListView
            style={{ width: '100%', height: '100%' }}
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text style={{padding: 30}}>{rowData}</Text>}
          />
        </TabPane>
      </Tabs>
    )
  }
}

export default Users;