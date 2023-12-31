import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';// you have to install this navigation dependency from react-native official website.
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';

const Stack = createNativeStackNavigator();
 
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
