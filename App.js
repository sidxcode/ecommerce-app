import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './components/screens/Home'
import MyCart from './components/screens/MyCart';
import Productinfo from './components/screens/Productinfo';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={
        {
          headerShown : false,
        }
      }>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="MyCart" component={MyCart}/>
        <Stack.Screen name="ProductInfo" component={Productinfo}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

