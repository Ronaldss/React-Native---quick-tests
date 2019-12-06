// Estilização com StyleSheet

import React, { Component } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Estilos } from './estilo2';


export default () => {
  return(
    <SafeAreaView style={Estilos.pagina}> 
      <Text style={Estilos.titulo}>Título</Text>
      <Text style={Estilos.texto}>RonaldsS</Text>
      <Text style={[Estilos.texto,{fontSize:22}]}>Análise completa.</Text>
      
      <View style={Estilos.pagina2}>
        <Text>O Ronald é bacana</Text>
      </View>    
    </SafeAreaView>

    
    
    
  );
}
