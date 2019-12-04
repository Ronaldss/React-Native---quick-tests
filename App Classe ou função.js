// Classe ou função

import React, { Component } from 'react';
import { Text } from 'react-native';


//componente dentro da CONSTANTES (recomendado)
// const TextoInicial = () => {
//   return(
//     <Text>Teste ok</Text>
//   );
// }


// Outra forma - FUNÇÕES (recomendado)
// function TextoInicial(){
//   return(
//     <Text>Texto2</Text>
//   );
// }


// Outra forma - CLASSES (forma mais antiga de se fazer)
class TextoInicial extends Component{
  render(){
    return(
      <Text>Texto 3</Text>
    );
  }
}


// Chamando o componente
export default TextoInicial;