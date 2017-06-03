/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Nav from './src/components/Nav/';

export default class crcrcryNews extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 1}}><Nav /></View>
      </View>
    )
  }
}

AppRegistry.registerComponent('crcrcryNews', () => crcrcryNews);
