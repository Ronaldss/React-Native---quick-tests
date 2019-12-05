// Estilização com StyleSheet

import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';


export default () => {
  return(
    <SafeAreaView style={styleRD.pagina}> 
      <Text style={{color:'#FFF', fontSize:20, textAlign:"center"}}>Teste funcionou!</Text>
      <Text style={styleRD.texto}>RonaldsS</Text>
      <Text style={[styleRD.texto,{fontSize:22}]}>Análise completa</Text>
    </SafeAreaView>
  );
}
const styleRD = StyleSheet.create({
  pagina:{
    margin:100,
    width:200,
    height:200,
    backgroundColor:'#CC3439',
    textAlign:"center"
  },
  texto:{
    color:'#1CF',
    fontSize:18,
    textAlign: "center"
  }
});