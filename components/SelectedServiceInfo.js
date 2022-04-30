import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'

const SelectedServiceInfo = (props) => {
    return(
            <ScrollView contentContainerStyle={styles.mainBlock}>
                <Text style={styles.titleText}>{props.service.title}</Text>
                <View style={styles.imageView}>
                    <Image source={props.service.image} style={styles.image}/>
                </View>
                <Text style={styles.infoText}>{props.service.text}</Text>
                <Text style={styles.infoText}>{props.service.address}</Text>
                <TouchableOpacity style={styles.button} onPress={() => props.setVisible(false)}>
                    <Text style={styles.buttonText}>Go Back</Text>
                </TouchableOpacity>
            </ScrollView>
    );
}
//{}

const styles = StyleSheet.create({
    mainBlock: {
        flex: 1,
        alignItems: 'center'
    },
    imageView:{
        backgroundColor: '#c4c4c4',
        borderRadius: 20,
        width: '80%',
        height: 300,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 300,
        width: 300
    },
    titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        marginVertical: 20
    },
    infoText: {
        alignSelf: 'flex-start',
        marginHorizontal: '10%',
        marginTop: 15,
        fontSize: 24
    },
    button: {
        backgroundColor: '#00d293',
        width: '80%',
        height: 65,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginTop: 100
    },
    buttonText: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold'
    }
});

export default SelectedServiceInfo;