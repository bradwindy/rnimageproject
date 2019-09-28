import React, {Component} from 'react';
import {View} from 'react-native';
import ImageList from './ImageList';
import {IconButton} from 'react-native-paper';

class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
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
          icon="info"
          color="white"
          onPress={() => navigation.navigate('Info')}
        />
      ),
    };
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
