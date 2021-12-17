// import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
// External Libraries
import { Text } from "react-native";
import { ThemeProvider } from 'styled-components/native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Theme
import { theme } from "./src/theme";
// Components
import { ClimbingScreen } from './src/screens/climbing.screen';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

const Tab = createBottomTabNavigator();

const Settings = () => <Text>Settings</Text>
const Map = () => <Text>Map</Text>


export default function App() {


  return (
   <>
        <ThemeProvider theme={theme}>
          <NavigationContainer> 
            <Tab.Navigator>
              <Tab.Screen name="Map" component={Map} />
              <Tab.Screen name="Climbing" component={ClimbingScreen} />
              <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
          </NavigationContainer>
          </ThemeProvider>
        <ExpoStatusBar style="auto" />
  </>
    
  );
}
