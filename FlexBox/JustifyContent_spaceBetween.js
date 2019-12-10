import React from 'react';
import { View } from 'react-native';

function JustifyContent() {
    return(
        // O atributo 'space-between' faz que os herdeiros compartilhem
        // igualmento o espaçamento disponivel pela view principal.
        // caso não seja declarado explicitamente nenhum view principal
        // ele utiliza todos o espaço disponivel do dispositivo.
        <View style={{flex:1, backgroundColor:'#3A125D'}}>   
        <View style={{
            flex:2, 
            justifyContent:'space-between',
            flexDirection:'column',
        }}>
            <View style={{width:50, height: 50, borderRadius:10, backgroundColor:'powderblue'}} />
            <View style={{width:50, height:50, borderRadius:15, backgroundColor:'skyblue'}} />
            <View style={{width:50, height:50, borderRadius:15, backgroundColor:'steelblue'}} />
            <View style={{width:50, height:50, borderRadius:15, backgroundColor:'red'}} />
        </View>  
        </View> 
    )
};

export default JustifyContent;