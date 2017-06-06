import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { List, InputItem, Toast, Button } from 'antd-mobile';

class Register extends Component{
  state = {
    username: '',
    password: '',
    confirm: '',
    email: '',
  }
  handleChange = (id, value) => {
    const tmpState = {};
    tmpState[id] = value;

    this.setState(tmpState);
  }
  handleClick = () => {
    const info = `\n${this.state.username}\n${this.state.password}\n${this.state.confirm}\n${this.state.email}`;
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
          <InputItem
            type="password"
            placeholder="Confirm your password"
            onChange={this.handleChange.bind(null, 'confirm')}
            value={this.state.confirm}
            clear={true}
          >验证密码</InputItem>
          <InputItem
            placeholder="Input your E-mail"
            onChange={this.handleChange.bind(null, 'email')}
            value={this.state.email}
            clear={true}
          >邮箱</InputItem>
        </List>
        <Button type="ghost" style={styles.button} onClick={this.handleClick}>注册</Button>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
  button: {
    marginTop: 25,
    marginLeft: 30,
    marginRight: 35,
  },
})

export default Register;