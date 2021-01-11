import React ,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import{Card,Header,Icon} from 'react-native-elements';
import firebase from 'firebase';

import db from '../config.js';

export default class MyDonation extends Component{
render(){
    return(
        <View>
            <Text>
                My Donations
            </Text>
        </View>
    )
}
}