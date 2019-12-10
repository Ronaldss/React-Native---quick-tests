import React, { Component } from 'react';
import { View } from 'react-native';

export default class FlexDirectionBasic extends Component {
    render(){
        return(
            <View style={{flex:1, flexDirection:'row'}}>
                <view style={{width:100, height:100, backgroundColor:'powderblue'}}/>
                <view style={{width:100, height:100, backgroundColor:'skyblue'}}/>
                <view style={{width:100, height:100, backgroundColor:'steelblue'}}/>
                <view style={{width:100, height:100, backgroundColor:'red'}}/>
            </View>
        );
    }
};