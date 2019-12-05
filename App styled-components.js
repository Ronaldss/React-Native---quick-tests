// styled-components

import React, { Component } from 'react';
import styled from 'styled-components/native';

// Criando um componente com os recursos do styled
const QualquerTexto = styled.Text`
  color:white;
  font-size:30px;
  textAlign:center;
`;
const Pagina = styled.SafeAreaView`
  backgroundColor:blue;
  height:500px;
  padding-top: 50px;
`;

// Impressão na tela
export default () => {
  return(
    <Pagina> 
      <QualquerTexto>Ronald</QualquerTexto>
      <QualquerTexto>Dell</QualquerTexto>
      <QualquerTexto>Portugal</QualquerTexto>
      <QualquerTexto>EUA</QualquerTexto>
      <QualquerTexto>China</QualquerTexto>
      <QualquerTexto>Digisat</QualquerTexto>
      <QualquerTexto>SysPDV</QualquerTexto>
    </Pagina>
  );
}

