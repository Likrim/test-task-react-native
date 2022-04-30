import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';
import Home from '../screens/Home';
import StackNavigator from './StackNavigator';
import { ListOfServices } from '../data/ListOfServices';

const TabNavigator = ({navigation}) => {
    const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown: false, tabBarShowLabel: false}}>
            <Tab.Screen name='Home' component={Home}
                options={{
                    tabBarIcon: ({focused}) => {
                        const image = focused ?
                        <Image source={require('../assets/home_orange.png')} style={styles.homImage}/> :
                        <Image source={require('../assets/home.png')} style={styles.homImage}/>
                        return(image);
                    }
                }}
                initialParams={{navigationDraw: navigation,
                service: ListOfServices[0],
                stackNavigation: null}}
            />
            <Tab.Screen name='StackNavigator' component={StackNavigator}
                options={{
                    tabBarIcon: ({focused}) => {
                        const image = focused ?
                        <Image source={require('../assets/services_orange.png')} style={styles.servicesImage}/> :
                        <Image source={require('../assets/services.png')} style={styles.servicesImage}/>
                        return(image);
                    }
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    homImage: {
        height: 34,
        width: 33,
        marginTop: 8,
        marginLeft: 10
    },
    servicesImage: {
        height: 40,
        width: 33,
        marginTop: 10,
        marginRight: 10
    }
});

export default TabNavigator;