import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, List, Button} from 'react-native-paper';

const downloadManager = require('react-native-simple-download-manager');

const config = {
  downloadTitle: 'Title that should appear in Native Download manager',
  downloadDescription:
    'Description that should appear in Native Download manager',
  saveAsName: 'File name to save',
  allowedInRoaming: true,
  allowedInMetered: true,
  showInDownloads: true,
  external: false, //when false basically means use the default Download path (version ^1.3)
  path: 'Download/', //if "external" is true then use this path (version ^1.3)
};

class ImageScreen extends Component {
  static navigationOptions = {
    title: 'Image Info',
    headerStyle: {
      backgroundColor: '#cf363b',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Card style={styles.imageinfocard}>
          <Card.Cover
            source={{
              uri: JSON.stringify(
                navigation.getParam('displayImage', 'default value'),
              ).replace(/\"/g, ''),
            }}
          />
          <Card.Content>
            <List.Section>
              <List.Item
                title={JSON.stringify(
                  navigation.getParam('user', 'default value'),
                ).replace(/\"/g, '')}
                left={() => <List.Icon icon="account-circle" />}
              />
              <List.Item
                title={JSON.stringify(
                  navigation.getParam('tags', 'default value'),
                ).replace(/\"/g, '')}
                left={() => <List.Icon color="#000" icon="label" />}
              />
            </List.Section>
            <Button
              icon="save"
              mode="contained"
              onPress={() =>
                downloadManager
                  .download('https://i.stack.imgur.com/oREtY.png')
                  .then(response => {
                    console.log('Download success!');
                  })
              }>
              Download
            </Button>
          </Card.Content>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageinfocard: {
    margin: 20,
  },
});

export default ImageScreen;
