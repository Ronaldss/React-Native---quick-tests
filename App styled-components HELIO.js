// styled-components HELIO
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styled, { css } from 'styled-components/native';



class Saida extends Component{
  
  render(){

  const Button = styled.Button`
  background: transparent;
  border-radius: 30px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

const Container = styled.View`
  justify-content: center;
  text-align: center;
`;

    return(
 
        <Container>

        <Button title='Ronald, vc é o que do burro?'/>
        <Text>teste ok!</Text>
        <Button title='Colega de trabalho!'/>

        </Container>

      
    );
  }
}
  export default Saida;

