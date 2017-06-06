import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Toast } from 'antd-mobile';

class LoginSuccess extends Component{

  state = {
    username: 'Crcrcry'
  }

  handleClick = () => {
    Toast.success("hello world", 1.5);
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.title}>欢迎您，{this.state.username}</Text>
          <Text style={styles.description}>登陆后，您可以设置对各种类型新闻的偏好程度，我们会根据您的偏好以及历史操作来为您推荐和筛选新闻。</Text>
          <Text style={styles.description}>希望能让您及时准确的了解到您感兴趣的新闻信息。</Text>
        </View>
        <View>
          <Button type="ghost" style={styles.button} onClick={this.handleClick}>退出账号</Button>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    fontSize: 22,
    paddingTop: 60,
    paddingLeft: 30,
    paddingBottom: 30
  },
  description: {
    fontSize: 18,
    color: '#999',
    paddingLeft: 30,
    paddingRight: 30,
    lineHeight: 26,
  },
  button: {
    marginTop: 35,
    marginLeft: 35,
    marginRight: 45,
  },
})

export default LoginSuccess;