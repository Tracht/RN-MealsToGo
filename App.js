// import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
// External Libraries
import { Text } from "react-native";
import { ThemeProvider } from 'styled-components/native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'; 
// Theme
import { theme } from "./src/theme";
// Components
import { ClimbingScreen } from './src/screens/climbing.screen';
import { SafeArea } from './src/components/SafeArea';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Climbing: "home",
  Settings: "settings",
  Map: "map",
}

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => {
      <Feather name={iconName} size={size} color={color} />
    }
  }
}

const tabConfig = {
  "tabBarActiveTintColor": "tomato",
  "tabBarInactiveTintColor": "gray",
  "tabBarStyle": [
    {
      "display": "flex"
    },
    null
  ]
}

const Settings = () => <SafeArea><Text>Settings</Text></SafeArea>
const Map = () => <SafeArea><Text>Map</Text></SafeArea>


export default function App() {

  return (
   <>
        <ThemeProvider theme={theme}>
          <NavigationContainer> 
            <Tab.Navigator
              screenOptions={createScreenOptions, tabConfig}
            >
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
