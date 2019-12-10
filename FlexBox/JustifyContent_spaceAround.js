import React, { Component } from 'react';
import { View } from 'react-native';

export default class SpaceAround extends Component{
    render(){
        return(
            <View style={{
                flex:1,
                flexDirection:'row',
                justifyContent:'space-around'
            }}>
                <View style={{width:100, height:100, backgroundColor:'powderblue'}} />
                <View style={{width:100, height:100, backgroundColor:'skyblue'}} />
                <View style={{width:100, height:100, backgroundColor:'steelblue'}} />
            </View>
        );
    }
};