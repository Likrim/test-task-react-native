import 'react-native-gesture-handler'
import React from 'react';
import { View, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './components/DrawerNavigator';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const App = () => {
  return(
    <View style={{marginTop: 25, flex: 1}}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </View>
  );
}

export default App;