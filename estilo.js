import React, { Component } from 'react';
import styled from 'styled-components/native';

const QualquerTexto = styled.Text`
  color:${props=>props.cor};
  font-size:30px;
  textAlign:center;
`;
const Pagina = styled.SafeAreaView`
  backgroundColor:blue;
  height:500px;
  padding-top: 50px;
`;
export { QualquerTexto, Pagina }