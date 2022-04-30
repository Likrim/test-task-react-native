import React from 'react';
import { BackHandler } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { TouchableOpacity, Image, Text, StyleSheet, Alert } from 'react-native';

const CustomDrawer = (props) => {
    const onPress = () => {
        Alert.alert('Exit App', 'Do you want to exit?', [
            {text: 'No', onPress: null, style: 'cancel'},
            {text: 'Yes', onPress: () => BackHandler.exitApp(), style: 'default'}
        ]),
        {
            cancelable: false
        }
    }

    return(
        <DrawerContentScrollView>
            <TouchableOpacity onPress={props.navigation.toggleDrawer} style={styles.button}>
                <Image source={require('../assets/close.png')} style={styles.image}/>
            </TouchableOpacity>
            <DrawerItemList {...props}/>
            <TouchableOpacity style={styles.exitBlock} onPress={onPress}>
                <Image source={require('../assets/exit.png')} style={styles.exitImage}/>
                <Text style={styles.exitText}>Exit App</Text>
            </TouchableOpacity>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 35,
        height: 35,
        alignSelf: 'flex-end',
        marginTop: 10,
        marginRight: 10,
        marginBottom: 15
    },
    image: {
        width: 35,
        height: 35,
        alignSelf: 'flex-end',
    },
    exitBlock: {
        flexDirection: 'row',
        marginTop: '163%',
        marginLeft: 10,
        alignItems: 'center'
    },
    exitImage: {
        height: 50,
        width: 50,
        marginRight: 10
    },
    exitText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white'
    }
});

export default CustomDrawer;