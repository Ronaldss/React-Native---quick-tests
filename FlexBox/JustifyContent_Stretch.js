import React from 'react';
import { View, Text } from 'react-native';

function JustifyContent() {
    return(

        // Adicionar alignItems a um style do componente determina o alinhamento dos descendentes ao longo 
        // do eixo secundário(se o eixo primário for row, então o secundário é column, e vice-versa). É para 
        // os descendentes serem alinhados pelo começo, centro, final, ou alargados para ocupar tudo. As opções 
        // disponíveis são respectivamente flex-start(começo), center(centro), flex-end(fim), e stretch(alargado).
        // Para que o stretch tenha algum efeito, os descendentes não devem ter dimensão fixa ao longo do eixo secundário. 
        // No exemplo a seguir, definir alignItems: stretch não faz nada até que o width:100 seja removido dos descendentes.

        // flexDirection: definiu nosso herdeiro na vertical
        // justifyContent: alocou nossos herdeiros ao centro do começo
        // alignItems: alocou nossos herdeiros no centro da view pai

        <View style={{flex:1, backgroundColor:'brown'}}>
            <View style={{
                flex:2,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'stretch',  // <-- Motivo da aula.  Vc tbm pode usar o alignItems:'stretch' para esticar. Remova os width dos filhos.
            }}>
                <View style={{height:100, backgroundColor:'powderblue', borderTopLeftRadius:15, borderTopRightRadius:15}} />
                <View style={{height:100, backgroundColor:'skyblue'}} />
                <View style={{height:100, backgroundColor:'steelblue', borderBottomEndRadius:15, borderBottomLeftRadius:15}} />
            </View>
            <Text>RonaldsS</Text>
        </View>
    );
};
export default JustifyContent;