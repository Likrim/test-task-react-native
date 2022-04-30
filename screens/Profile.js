import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';

const Profile = ({route, navigation}) => {
    let enabled = false;

    return(
        <View style={styles.mainBlock}>
            <Text style={styles.mainText}>Profile {'\n'}Hello, UserName!</Text>
            <View style={{width: '100%', borderTopWidth: 3, alignItems: 'center'}}>
                <Text style={styles.titleText}>You can change your name here!</Text>
            </View>
            <TextInput placeholder='Type your name' style={styles.inputText} defaultValue={enabled ? route.params.name : ''}
                onChangeText={text => {
                    if(route.params.setName == null && route.params.setInfo == null){
                        enabled = false;
                        alert('You must to input your name on home screen firstly!!!');
                        navigation.navigate('TabNavigator');
                    } else {
                        enabled = true;
                        route.params.setName(text);
                    }
                }}
            />
            <View style={styles.buttonChangeName}>
                <TouchableOpacity style={styles.TouchableButtonChangeName}
                onPress={() => navigation.navigate('TabNavigator')}>
                    <Text style={styles.textButton}>CHANGE NAME</Text>
                </TouchableOpacity>
            </View>
            <View style={{width: '100%', borderTopWidth: 3, marginTop: 15, alignItems: 'center'}}>
                <Text style={styles.textInfo}>Type some information about you.</Text>
                <TextInput placeholder='Type some information' numberOfLines={3} style={styles.textInputInfo}
                    onChangeText={text => route.params.setInfo(text)}
                    text={route.params.info}
                />
                <View style={styles.buttonChangeName}>
                    <TouchableOpacity style={styles.TouchableButtonChengeInfo}
                    onPress={() => navigation.navigate('TabNavigator')}>
                        <Text style={styles.textButton}>INPUT INFORMATION</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainText: {
        fontSize: 48,
        color: '#e79c28',
        fontWeight: 'bold',
        marginBottom: '15%',
        marginTop: 20,
        textAlign:'center',
    },
    mainBlock: {
        backgroundColor: 'white',
        alignItems: 'center'
    },
    inputText: {
        borderWidth: 1,
        padding: 10,
        fontSize: 22,
        width: '90%',
        marginHorizontal: '5%',
        marginVertical: 15,
        borderRadius: 10
    },
    titleText: {
        marginTop: 15,
        fontSize: 20,
        color: '#e79c28',
        marginHorizontal: '5%',
        alignSelf: 'flex-start'
    },
    buttonChangeName: {
        borderWidth: 3,
        borderColor: '#e79c28',
        borderRadius: 10,
        height: 50,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    TouchableButtonChangeName: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    textInfo: {
        fontSize: 20,
        alignSelf: 'flex-start',
        marginHorizontal: '5%',
        color: '#e79c28',
        marginTop: 12,
    },
    textInputInfo: {
        borderWidth: 1,
        padding: 10,
        fontSize: 22,
        width: '90%',
        marginHorizontal: '5%',
        marginVertical: 15,
        borderRadius: 10,
        textAlignVertical: 'top',
        textAlign: 'left'
    },
    TouchableButtonChengeInfo: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Profile;