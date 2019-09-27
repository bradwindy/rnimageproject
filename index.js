/**
 * @format
 */

import * as React from 'react';
import {AppRegistry, StatusBar} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import App from './App';
import {name as appName} from './app.json';

export default function Main() {
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#cf363b',
      accent: '#f1c40f',
    },
  };
  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor="#cf363b" barStyle="light-content" />
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
