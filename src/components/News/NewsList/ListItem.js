import React, { Component } from 'react';
import { View, ListView, Text, StyleSheet, Image } from 'react-native';

class NewsItem extends Component {

  render() {
    return (
      <View style={{flex: 1, height: 300, flexDirection: 'column'}}>
        <View style={styles.newsTitle}>
          <Text style={{fontSize: 18}}>{this.props.data.title}</Text>
        </View>
        <View style={styles.newsImage} >
          <Image
            source={{uri: this.props.data.imageUrl}}
            style={{width: 330, height: 200}}
          />
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