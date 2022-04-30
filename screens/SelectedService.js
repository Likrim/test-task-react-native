import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'

const SelectedService = ({route}) => {
    return(
            <ScrollView contentContainerStyle={styles.mainBlock}>
                <Text style={styles.titleText}>{route.params.service.title}</Text>
                <View style={styles.imageView}>
                    <Image source={route.params.service.image} style={styles.image}/>
                </View>
                <Text style={styles.infoText}>{route.params.service.text}</Text>
                <TouchableOpacity style={styles.button}
                onPress={() => {
                    route.params.stackNavigation.navigate('Services');
                    route.params.tabNavigation.navigate('Home', {service: route.params.service, stackNavigation: route.params.stackNavigation});
                    route.params.tabNavigation.setOptions({tabBarStyle: {display: 'flex'}});
                }}>
                    <Text style={styles.buttonText}>Select</Text>
                </TouchableOpacity>
            </ScrollView>
    );
}

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
        marginTop: 85
    },
    buttonText: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold'
    }
});

export default SelectedService;