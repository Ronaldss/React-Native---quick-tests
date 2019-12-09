// Aprendendo a usar o Flex

import React, { Component } from 'react';
import { View } from 'react-native';

export default class FlexBasico extends Component {
  render() {
    return(
      // Como utolizamos flex na vertical  em nossos hedeiros,
      // removemos o atributo equivalente heoght'
      <View style={{ flex:1, flexDirection: 'column', backgroundColor: 'red' }}>
        <View style={{width:'100%', height:100, backgroundColor: 'powderblue' }} />
        <View style={{ width:'100%', height:100, backgroundColor:'skyblue'}} />
        <View style={{width:'100%', height: 100, backgroundColor:'steelblue'}} />
      </View>
    );
  }
};
