import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Provider as PaperProvider} from 'react-native-paper';
import Header from './components/Header';
import {Appbar} from 'react-native-paper';
import ImageList from './components/ImageList';

class App extends Component {
  render() {
    return (
      <View>
        <Header />
        <ImageList />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  list: {
    margin: 100,
  },
});

export default App;
