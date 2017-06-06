import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { List, Button, Toast, Slider, WingBlank, WhiteSpace } from 'antd-mobile';

class Setting extends Component{
  state = {
    username: 'Crcrcry',
    newsType: ["头条", "社会", "国内", "国际", "娱乐", "体育"],
    newsRank: [3, 3, 3, 3, 3, 3],
  }
  handleChange = (index, value) => {
    const tmpNewsRank = [...this.state.newsRank];
    tmpNewsRank[index] = value;

    this.setState({
      newsRank: tmpNewsRank
    });
  }
  handleClick = () => {
    Toast.success("helloworld", 1);
  }

  render(){
    const sliderArr = this.state.newsType.map((item, index) => (
        <View key={item}>
          <WingBlank size="lg">
            <Text style={styles.title}>{item}：{this.state.newsRank[index]}</Text>
            <Slider defaultValue={3} min={0} max={5} step={1} onChange={this.handleChange.bind(null, index)} />
          </WingBlank>
        </View>
    ));

    return(
      <View style={styles.container}>
        <List renderHeader={() => `${this.state.username}，请填写新闻偏好设置`}>
          <WhiteSpace size="lg" />
          {sliderArr}
        </List>
        <Button type="ghost" style={styles.button} onClick={this.handleClick}>确定</Button>
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
  title: {
    paddingTop: 0,
    paddingLeft: 5,
    fontSize: 18,
  },
  button: {
    marginTop: 18,
    marginLeft: 30,
    marginRight: 35,
    marginBottom: 70,
  },
})

export default Setting;