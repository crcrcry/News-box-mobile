import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { List, InputItem, Toast, Button } from 'antd-mobile';

class LoginForm extends Component{
  state = {
    username: '',
    password: '',
  }
  handleChange = (id, value) => {
    const tmpState = {};
    tmpState[id] = value;

    this.setState(tmpState);
  }
  handleClick = () => {
    const info = `\n\n\n${this.state.username} ${this.state.password}`
    Toast.fail(info, 1.5);
  }

  render(){
    return(
      <View style={styles.container}>
        <List renderHeader={() => '请填写用户信息'}>
          <InputItem
            placeholder="Input your username"
            onChange={this.handleChange.bind(null, 'username')}
            value={this.state.username}
            clear={true}
          >用户名</InputItem>
          <InputItem
            type="password"
            placeholder="Input your password"
            onChange={this.handleChange.bind(null, 'password')}
            value={this.state.password}
            clear={true}
          >密码</InputItem>

        </List>
        <Button type="ghost" style={styles.button} onClick={this.handleClick}>登录</Button>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  button: {
    marginTop: 25,
    marginLeft: 30,
    marginRight: 35,
  },
})

export default LoginForm;