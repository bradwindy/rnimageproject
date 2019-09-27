import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Appbar} from 'react-native-paper';

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Appbar style={styles.bottom}>
          <Text style={styles.title}>Wallpaper Finder</Text>
          <Appbar.Action
            icon="help"
            color="white"
            style={styles.button}
            onPress={() => console.log('Pressed archive')}
          />
        </Appbar>
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 15,
  },
  button: {
    position: 'absolute',
    right: 0,
  },
});
