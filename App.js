// import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
// External Libraries
import { Text } from "react-native";
import { ThemeProvider } from 'styled-components/native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
// Theme
import { theme } from "./src/theme";
// Components
import { ClimbingScreen } from './src/screens/climbing.screen';
import { SafeArea } from './src/components/SafeArea';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

const Tab = createBottomTabNavigator();

const Settings = () => <SafeArea><Text>Settings</Text></SafeArea>
const Map = () => <SafeArea><Text>Map</Text></SafeArea>


export default function App() {

  return (
   <>
        <ThemeProvider theme={theme}>
          <NavigationContainer> 
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                  let iconName;
  
                  if (route.name === "Climbing") {
                    iconName = "md-home";
                  } else if (route.name === "Settings") {
                    iconName = "md-settings";
                  } else if (route.name === "Map") {
                    iconName = "md-map";
                  }
  
                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: "tomato",
                inactiveTintColor: "gray",
              }}
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
