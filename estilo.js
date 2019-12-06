
import styled from 'styled-components/native';

const QualquerTexto = styled.Text`
  color:${props=>props.cor};
  font-size:30px;
  textAlign:center;
`;
const Pagina = styled.SafeAreaView`
  flex:1;
  backgroundColor:blue;
  height:500px;
  padding-top: 50px;
`;
const Circulo = styled.View`
    backgroundColor: white;
    width: 80px;
    borderRadius:35px;
    textAlign:center;
    margin:auto;
`;
const Botao = styled.Button`
  backgroundColor: red;
  border-radius: 30px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;
export { QualquerTexto, Botao, Pagina, Circulo }