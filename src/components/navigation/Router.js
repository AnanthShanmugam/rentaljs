import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/Home';
import PostDetails from '../../screens/PostDetails';
import BottomTabNavigator from './BottomTabNavigator';


const Route = () => {

    const Stack = createStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={BottomTabNavigator} options={{headerShown: false}}/>
            <Stack.Screen name="Post Details" component={PostDetails} options={{headerShown: false}}/>
        </Stack.Navigator>

    </NavigationContainer>
  )
}

export default Route