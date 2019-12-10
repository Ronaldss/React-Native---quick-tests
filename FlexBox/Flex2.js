// Aprendendo a usar o Flex - Flex2

import React, { Component } from 'react';
import { View } from 'react-native';

export default class FlexBasico2 extends Component {
  render() {
    return(
      // Como utilizaremos flex horizontal em nossos herdeios,
      // removemos o atributo equivalente 'width'
      <View style={{flexDirection:'row', width:150, backgroundColor:'red'}}>
        <View style={{flex:1, height: 50, backgroundColor:'powderblue'}} />
        <View style={{flex:2, heigth:50, backgroundColor: 'skyblue'}} />
        <View style={{flex:3, heigth: 50, backgroundColor:'steelblue'}} />
      </View>
    );
  }
};