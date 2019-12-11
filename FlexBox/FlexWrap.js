import React, { Component } from 'react';
import { View } from 'react-native';
import { Ronald } from './estiliFlexWrap';

export default class FlexDirectionBasic extends Component {
    render(){
        return(
            <View style={Ronald.bcg}>
                <View style={Ronald.um}/>
                <View style={Ronald.dois}/>
                <View style={Ronald.tres}/>
                <View style={Ronald.quatro}/>
                <View style={Ronald.cinco} />
                <View style={Ronald.seis} />
                <View style={{width:100, height:100, backgroundColor: 'yellow'}} />
                <View style={{width:100, height:100, backgroundColor: '#5c1596'}} />
                <View style={{width:100, height:100, backgroundColor: '#1ddee5'}} />
                <View style={{width:100, height:100, backgroundColor: '#e2e51d'}} />
                <View style={{width:100, height:100, backgroundColor: '#23ef3b'}} />
                <View style={{width:100, height:100, backgroundColor: '#246ff2'}} />
                <View style={{width:100, height:100, backgroundColor: '#f224e7'}} />
                <View style={{width:100, height:100, backgroundColor: '#f23524'}} />
                <View style={{width:100, height:100, backgroundColor: '#f6ff00'}} />
                <View style={{width:100, height:100, backgroundColor:'powderblue'}}/>
                <View style={{width:100, height:100, backgroundColor:'skyblue'}}/>
                <View style={{width:100, height:100, backgroundColor:'steelblue'}}/>
                <View style={{width:100, height:100, backgroundColor:'red'}}/>
                <View style={{width:100, height:100, backgroundColor: 'pink'}} />
                <View style={{width:100, height:100, backgroundColor: 'green'}} />
                <View style={{width:100, height:100, backgroundColor: 'yellow'}} />
                <View style={{width:100, height:100, backgroundColor: '#5c1596'}} />
                <View style={{width:100, height:100, backgroundColor: '#1ddee5'}} />
                <View style={{width:100, height:100, backgroundColor: '#e2e51d'}} />
                <View style={{width:100, height:100, backgroundColor: '#23ef3b'}} />
                <View style={{width:100, height:100, backgroundColor: '#246ff2'}} />
                <View style={{width:100, height:100, backgroundColor: '#f224e7'}} />
                <View style={{width:100, height:100, backgroundColor: '#f23524'}} />
                <View style={{width:100, height:100, backgroundColor: '#f6ff00'}} />
            </View>
        );
    }
};