import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import CustomDrawer from './CustomDrawer';
import Profile from '../screens/Profile';


const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator();

    return(
        <Drawer.Navigator initialRouteName='TabNavigator' 
        screenOptions={({navigation}) => ({
            headerRight: () => {
                return(
                    <TouchableOpacity style={styles.button} onPress={navigation.toggleDrawer}>
                        <Image source={require('../assets/list.png')} style={styles.image}/>
                    </TouchableOpacity>
                );
            },
            headerLeft: () => null,
            headerTitle: '',
            headerStyle: {backgroundColor: '#E79C28'},
            drawerPosition: 'right',
            drawerStyle: {backgroundColor: '#E79C28',
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20},
        })}
        drawerContent={props => <CustomDrawer {...props} />}>
            <Drawer.Screen name='TabNavigator' component={TabNavigator} 
                options={{drawerItemStyle: {display: 'none'}}}
            />
            <Drawer.Screen name='Profile' component={Profile} 
                options={{
                    headerShown: false,
                    drawerIcon: () => {
                        const image = <Image source={require('../assets/profile.png')}
                            style={styles.profileImage}/>
                        return(image);
                    },
                    drawerLabelStyle: {fontSize: 28, color: 'white', fontWeight: 'bold'}
                }}
                initialParams={{ 
                setName: null, 
                setInfo: null}}
            />
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    head: {
        alignItems: 'flex-end',
        backgroundColor: '#E79C28',
        height: 50,
        width: '100%'
    },
    button: {
        flex: 1,
        height: 50,
        width: '12%',
        alignItems: 'center',
        marginRight: 5,
        justifyContent: 'center',
        color: 'white'
    },
    image: {
        width: 32,
        height: 34,
        marginRight: 13
    },
    profileImage: {
        width: 50,
        height: 50
    }
});

export default DrawerNavigator;