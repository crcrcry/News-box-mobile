/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import Nav from './src/components/Nav/';

export default class crcrcryNews extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Crcrcry-News</Text>
        </View>
        <View style={{flex: 1}}>
          <Nav />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    width: '100%',
    height: 30,
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 17,
  }
})

AppRegistry.registerComponent('crcrcryNews', () => crcrcryNews);
