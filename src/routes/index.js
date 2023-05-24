import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page1 from '../pages/page1';
import Page2 from '../pages/page2';
import Page3 from '../pages/page3';
import Page4 from '../pages/page4';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen   name="Page1" component={Page1} />
            <Stack.Screen name="Page2" component={Page2} />
            <Stack.Screen name="Page3" component={Page3} />
            <Stack.Screen name="Page4" component={Page4} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}