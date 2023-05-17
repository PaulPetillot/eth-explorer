import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { Image } from 'react-native';
import logo from './assets/logo.png'
import HomeScreen from './screens/Homescreen/Homescreen';
import BlockDetails from './screens/BlockDetails/BlockDetails';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <Image style={{ width: 50, height: 50 }} source={logo} />
          ),
        }}
      />
      <Stack.Screen
        name="block-details"
        component={BlockDetails}
        options={{ title: 'Block Details' }}
      />
    </Stack.Navigator>
  )
}

export default Router