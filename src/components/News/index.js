import React, { Component } from 'react';
import { NavigatorIOS } from 'react-native';
import NewsList from './NewsList/';

class News extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: NewsList,
          title: 'Crcrcry-News',
        }}
        style={{flex: 1}}
      />
    )
  }
}

export default News;