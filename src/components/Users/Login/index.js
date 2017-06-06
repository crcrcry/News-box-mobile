import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginForm from './Form';
import LoginSuccess from './Success';

class Login extends Component{

  render(){
    return(
      <View style={{ width: '100%', height: '100%' }}>
        {/*<LoginForm />*/}
        <LoginSuccess />
      </View>
    )
  }

}

export default Login;