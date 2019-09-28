import React, {Component} from 'react';
import {StyleSheet, View, ToastAndroid} from 'react-native';
import {Card, List, Button} from 'react-native-paper';
import RNFetchBlob from 'rn-fetch-blob';
import WallPaperManager from 'react-native-wallpaper-enhanced';
import {PermissionsAndroid} from 'react-native';

async function requestStoragePermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Storage Access Required',
        message: 'This App needs to access your storage to save images.',
      },
    );
  } catch (err) {
    alert('err', err);
    console.warn(err);
  }
}

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

  componentDidMount() {
    requestStoragePermission();
  }

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
              onPress={() => {
                RNFetchBlob.config({
                  fileCache: true,
                  appendExt: 'jpg',
                  path:
                    RNFetchBlob.fs.dirs.DownloadDir +
                    '/image' +
                    JSON.stringify(
                      navigation.getParam('id', 'default value'),
                    ).replace(/\"/g, '') +
                    '.jpg',
                  addAndroidDownloads: {
                    useDownloadManager: true,
                    mediaScannable: true,
                    notification: true,
                    path:
                      RNFetchBlob.fs.dirs.DownloadDir +
                      '/image' +
                      JSON.stringify(
                        navigation.getParam('id', 'default value'),
                      ).replace(/\"/g, '') +
                      '.jpg',
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
                  .then(res => {
                    ToastAndroid.show('Downloading', ToastAndroid.SHORT);
                    // the temp file path with file extension `png`
                    console.log('The file saved to ', res.path());
                    // Beware that when using a file path as Image source on Android,
                    // you must prepend "file://"" before the file path
                  });
              }}>
              Download
            </Button>
            <Button
              icon="wallpaper"
              mode="contained"
              style={styles.setWallButton}
              onPress={() =>
                WallPaperManager.setWallpaper(
                  {
                    uri: JSON.stringify(
                      navigation.getParam('displayImage', 'default value'),
                    ).replace(/\"/g, ''),
                  },
                  res =>
                    ToastAndroid.show('Wallpaper Set!', ToastAndroid.SHORT),
                )
              }>
              Set Wallpaper
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
  setWallButton: {
    marginTop: 10,
  },
});

export default ImageScreen;
