import React, {useState} from 'react';
import { TouchableNativeFeedback, View, Text, StyleSheet, Modal } from 'react-native';

const UserInfo = (props) => {
    const[userName, setUserName] = useState('Guest');
    const[userInfo, setUserInfo] = useState('Type some info about you');

    return (
        <View style={styles.mainBlock}>
            <TouchableNativeFeedback 
            onPress={() => {
                props.routeToProfile.params.navigationDraw.navigate('Profile', {setName: setUserName, setInfo: setUserInfo, name: userName, info: userInfo})
                }}>
                <View>
                    <Text style={styles.buttonText}>Hi, {userName}</Text>
                </View>
            </TouchableNativeFeedback>
            <Text style={styles.infoText}>{userInfo}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainBlock: {
        backgroundColor: '#E79C28',
        width: '94%',
        height: 170,
        borderRadius: 20,
        marginTop: 20,
        marginBottom: 50,
        paddingHorizontal: 7,
        paddingVertical: 15,
        alignSelf: 'center'
    },
    buttonProfile: {

    },
    buttonText: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20
    },
    infoText: {
        fontSize: 14,
        color: 'white'
    },
});

export default UserInfo;