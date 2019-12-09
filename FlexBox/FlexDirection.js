// Aprendendo a usar FLEXBOX;
import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class PosicionamentoBasico extends Component{
  render() {
    return(
      // O valor padão é column, onde a interface fica na vertical:
      <View style={{flex:1, flexDirection:'column'}}>
        <View style={{width:100, height:100, backgroundColor: 'powderblue'}}/>
        <View style={{width:100, height:100, backgroundColor: 'skyblue'}} />
        <View style={{width:100, height:100, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};
