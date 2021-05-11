import React from 'react';
import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity, Modal } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import firebase from 'firebase'
import db from '../config'

export default class SearchStory extends React.Component{
    render(){
        return(
            <View>
                <TextInput placeholder='Write name of story here'
                 style={{width:300,
                 height:80,
                 flex: 1,
                 justifyContent: 'center',
                 alignItems: 'center'}}>

                </TextInput>
                <TouchableOpacity
                 style={{width:80,
                    height:80,
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor:'black'
                    }} 
                    onPress={
                        <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                          Alert.alert("Modal has been closed.");
                          setModalVisible(!modalVisible);
                        }}
                      >
                          <Text>hi still working on this bit</Text>
                      </Modal>
                    }>
                    <Text style={{color:'white'}}>GO</Text>
                </TouchableOpacity>
            </View>
        )
    }
}