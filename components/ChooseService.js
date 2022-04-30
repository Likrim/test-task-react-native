import React from 'react';
import { View, Image, Text, TouchableNativeFeedback, StyleSheet } from 'react-native';

const ChooseService = (props) => {
    return(
        <View>
            <Text style={styles.titleService}>{props.choosedService.title}</Text>
            <TouchableNativeFeedback onPress={() => {
                    props.setVisible(true);
                }}>
                <View style={styles.buttonService}>
                    <Image source={props.choosedService.image} style={styles.image}/>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    titleService: {
        fontSize: 18,
        alignSelf: 'flex-start',
        marginHorizontal: '6%'
    },
    buttonService: {
        height: 280,
        width: '94%',
        backgroundColor: '#c4c4c4',
        borderRadius: 20,
        alignSelf: 'center'
    },
    image: {
        width: 300,
        height: 280,
        alignSelf: 'center'
    }
});

export default ChooseService;