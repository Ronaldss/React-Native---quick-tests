// styled-components
import React, { Component } from 'react';
import { QualquerTexto, Botao, Pagina, Circulo } from './estilo'
// Impressão na tela
export default () => {
  return(
    <Pagina> 
      <QualquerTexto cor="black">Ronald</QualquerTexto>
      <QualquerTexto cor="orange">Dell</QualquerTexto>
      <QualquerTexto cor="yellow">Portugal</QualquerTexto>
      <QualquerTexto cor="pink">Teste</QualquerTexto>
      <QualquerTexto cor="red">Santos</QualquerTexto>
      <QualquerTexto cor="orange">Zmax</QualquerTexto>
      <QualquerTexto cor="yellow">Ifal</QualquerTexto>
      <QualquerTexto cor="pink">React-native</QualquerTexto>
      <Circulo><QualquerTexto cor="brown">Teste</QualquerTexto></Circulo>
      <Botao title='teste'/>
    </Pagina>
  );
}



