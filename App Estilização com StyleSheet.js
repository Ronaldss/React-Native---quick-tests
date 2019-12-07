// Estilização com StyleSheet

import React, { Component } from 'react';
import { AppRegistry, SafeAreaView, Text, View } from 'react-native';
import { Estilos } from './estilo2';


export default () => {
  return(
    <SafeAreaView style={Estilos.fundo}> 
      
      {/* <Text style={Estilos.titulo}>Text1</Text>
      <Text style={Estilos.texto}>Text2</Text>
      <Text style={[Estilos.texto,{fontSize:22}]}>Text3.</Text> */}
      
      <View style={Estilos.pagina1}></View>  
      <View style={Estilos.pagina2}></View>
      <View style={Estilos.pagina1}></View>
      <View style={Estilos.pagina2}></View>
      <View style={Estilos.pagina1}></View>
      <View style={Estilos.pagina2}></View>
      <View style={[Estilos.pagina1, {backgroundColor:'red'}]}></View>
      <View style={Estilos.pagina2}></View>
      <View style={Estilos.pagina1}></View>
      <View style={Estilos.pagina2}></View>
      <View style={Estilos.pagina1}></View>
      <View style={Estilos.pagina2}></View>
      <View style={Estilos.pagina1}></View>
      <View style={Estilos.pagina2}></View>
      <View style={Estilos.pagina1}></View>
    </SafeAreaView>

    
    
    
  );
}
