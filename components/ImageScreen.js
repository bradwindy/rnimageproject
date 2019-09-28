import React, {Component} from 'react';
import {StyleSheet, View, ToastAndroid} from 'react-native';
import {Card, List, Button} from 'react-native-paper';
import RNFetchBlob from 'rn-fetch-blob';

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
        <Card style={styles.imageinfocard} elevation={3}>
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
                description="User"
                left={() => <List.Icon icon="account-circle" color="#cf363b" />}
              />
              <List.Item
                title={JSON.stringify(
                  navigation.getParam('tags', 'default value'),
                ).replace(/\"/g, '')}
                description="Image Tags"
                left={() => <List.Icon color="#cf363b" icon="label" />}
              />
              <List.Item
                title={
                  JSON.stringify(
                    navigation.getParam('width', 'default value'),
                  ).replace(/\"/g, '') +
                  ' x ' +
                  JSON.stringify(
                    navigation.getParam('height', 'default value'),
                  ).replace(/\"/g, '')
                }
                description="Dimensions"
                left={() => (
                  <List.Icon icon="photo-size-select-large" color="#cf363b" />
                )}
              />
            </List.Section>
            <Button
              icon="get-app"
              mode="contained"
              onPress={() =>
                RNFetchBlob.config({
                  fileCache: true,
                  addAndroidDownloads: {
                    useDownloadManager: true,
                    notification: true,
                    title: 'Wallpaper Finder Image Download',
                    description: 'File downloaded by download manager.',
                  },
                })
                  .fetch(
                    'GET',
                    JSON.stringify(
                      navigation.getParam('displayImage', 'default value'),
                    ).replace(/\"/g, ''),
                  )
                  .then(() => {
                    ToastAndroid.show('Downloading', ToastAndroid.SHORT);
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
    margin: 15,
  },
});

export default ImageScreen;
