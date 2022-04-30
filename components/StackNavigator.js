import React, {useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Services from '../screens/Services';
import SelectedService from '../screens/SelectedService';

const StackNavigator = ({navigation}) => {
    const Stack = createNativeStackNavigator();
    const[service, setService] = useState({id: 0, title: 'Choose service on services tab', text: '', address: '', image: null});

    return(
        <Stack.Navigator initialRouteName='Services' screenOptions={{headerShown: false}}>
            <Stack.Screen name='Services' component={Services}
                initialParams={{tabNavigation: navigation,
                setService: setService}}
            />
            <Stack.Screen name='ChoosedService' component={SelectedService}
                initialParams={{service: service}}
            />
        </Stack.Navigator>
    );
}

export default StackNavigator;