import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import NewsDetail from '../NewsDetail/';

class NewsItem extends Component {

  handlePress = () => {
    this.props.navigator.push({
      component: NewsDetail,
      title: this.props.data.title,
      passProps: {
        newsInfo: this.props.data
      }
    })
  }

  render() {
    return (
      <View style={{flex: 1, height: 300, flexDirection: 'column'}}>
        <View style={styles.newsTitle}>
          <TouchableHighlight
            onPress={this.handlePress}
          >
            <Text style={{fontSize: 18}}>{this.props.data.title}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.newsImage} >
          <TouchableHighlight
            onPress={this.handlePress}
          >
            <Image
              source={{uri: this.props.data.imageUrl}}
              style={{width: 330, height: 200}}
            />
          </TouchableHighlight>
        </View>
        <View style={styles.newsBottom} >
          <View style={styles.newsAuthor}>
            <Text style={styles.bottomText}>{this.props.data.author}</Text>
          </View>
          <View style={styles.newsTime}>
            <Text style={styles.bottomText}>{this.props.data.time}</Text>
          </View>
        </View>
      </View>
    )
  }

};

const styles = StyleSheet.create({
  newsTitle: {
    flex: 3,
    paddingLeft: 20,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  newsImage: {
    flex: 10,
    paddingLeft: 20,
    paddingRight: 10,
  },
  newsBottom: {
    flex: 2,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 25,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  newsAuthor: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  newsTime: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bottomText: {
    fontSize: 14,
    color: '#999',
  }
});

export default NewsItem;