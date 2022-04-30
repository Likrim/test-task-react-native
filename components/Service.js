import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

const Service = (props) => {

    return(
        <TouchableOpacity style={styles.mainBlock}
        onPress={() => {
            props.setService(props.service);
            props.navigationStack.navigate('ChoosedService', {service: props.service,
            tabNavigation: props.tabNavigation,
            stackNavigation: props.navigationStack});
            props.tabNavigation.setOptions({tabBarStyle: {display: 'none'}});
            }}>
            <View style={styles.textBlock}>
                <Text style={styles.textService}>{props.service.title}</Text>
                <Text style={styles.textService}>{props.service.text}</Text>
                <Text style={styles.textService}>{props.service.address}</Text>
            </View>
            <View style={styles.buttonImage}>
                <Image style={styles.image} source={props.service.image} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    mainBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#c4c4c4',
        borderRadius: 20,
        marginTop: 20,
        marginHorizontal: '5%',
        width: '90%',
        height: 150,
        paddingHorizontal: 15
    },
    textBlock: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    buttonImage: {
        height: 110,
        width: 110,
        borderRadius: 55,
        backgroundColor: '#f04f6d'
    },
    image: {
        height: 110,
        width: 110
    },
    textService: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default Service;