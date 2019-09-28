import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, List} from 'react-native-paper';

class InfoScreen extends Component {
  static navigationOptions = {
    title: 'App Info',
    headerStyle: {
      backgroundColor: '#cf363b',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <View style={styles.main}>
        <List.Section>
          <List.Subheader>Credits</List.Subheader>
          <List.Item
            title="Bradley Windybank"
            description="App Creator (github.com/bradwindy)"
            left={() => <List.Icon icon="account-circle" color="#cf363b" />}
          />
          <List.Item
            title="Pixabay"
            description="API providing the free images"
            left={() => <List.Icon icon="cloud-download" color="#cf363b" />}
          />
        </List.Section>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    padding: 10,
  },
});

export default InfoScreen;
