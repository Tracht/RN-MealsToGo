// import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
// External Libraries
import { StyleSheet} from 'react-native';
import { ThemeProvider } from 'styled-components/native'; 
// Infra
import { theme } from "./src/infrastructure/theme";
// Components
import { ClimbingScreen } from './src/features/climbingSpots/screens/climbing.screen';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

export default function App() {

  return (
    <> 
      <ThemeProvider theme={theme}>
        <ClimbingScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
    
  );
}
