import React, {Component} from 'react';
import {View} from 'react-native';
import ImageList from './ImageList';
import {IconButton} from 'react-native-paper';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Wallpaper Finder',
    headerStyle: {
      backgroundColor: '#cf363b',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: (
      <IconButton
        icon="help"
        color="white"
        onPress={() => console.log('Pressed')}
      />
    ),
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <ImageList navFunc={navigate} />
      </View>
    );
  }
}

export default HomeScreen;
