import React, {Component} from 'react';
import {StyleSheet, ScrollView, ToastAndroid} from 'react-native';
import axios from 'axios';
import {Button, Card, TouchableRipple} from 'react-native-paper';
import RNFetchBlob from 'rn-fetch-blob';

class ImageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        'https://pixabay.com/api/?key=13372617-70a87338d03b5e4a056448e09&category=backgrouds&image_type=photo&per_page=50&editors_choice=true',
      )
      .then(response => {
        this.setState({images: response.data.hits});
      });
  }

  render() {
    return (
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.listcont}>
        {this.state.images.map(item => (
          <Card style={styles.imgCard} key={item.id} elevation={3}>
            <TouchableRipple
              onPress={() =>
                this.props.navFunc('Image', {
                  displayImage: item.largeImageURL,
                  downloadImage: item.imageURL,
                  user: item.user,
                  tags: item.tags,
                  height: item.imageHeight,
                  width: item.imageWidth,
                })
              }
              rippleColor="rgba(0, 0, 0, .0)">
              <Card.Cover
                style={styles.cover}
                source={{uri: item.largeImageURL}}
              />
            </TouchableRipple>
            <Card.Actions style={styles.actions}>
              <Button
                style={styles.button}
                icon="info"
                mode="text"
                color="#cf363b"
                onPress={() =>
                  this.props.navFunc('Image', {
                    displayImage: item.largeImageURL,
                    downloadImage: item.imageURL,
                    user: item.user,
                    tags: item.tags,
                    height: item.imageHeight,
                    width: item.imageWidth,
                    id: item.id,
                  })
                }>
                Info
              </Button>
              <Button
                style={styles.button}
                icon="get-app"
                mode="text"
                color="#cf363b"
                onPress={() => {
                  RNFetchBlob.config({
                    fileCache: true,
                    appendExt: 'jpg',
                    path:
                      RNFetchBlob.fs.dirs.DownloadDir +
                      '/image' +
                      item.id +
                      '.jpg',
                    addAndroidDownloads: {
                      useDownloadManager: true,
                      mediaScannable: true,
                      notification: true,
                      path:
                        RNFetchBlob.fs.dirs.DownloadDir +
                        '/image' +
                        item.id +
                        '.jpg',
                      title: 'Wallpaper Finder Image Download',
                      description: 'File downloaded by download manager.',
                    },
                  })
                    .fetch('GET', item.largeImageURL)
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
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>
    );
  }
}

export default ImageList;

const styles = StyleSheet.create({
  scrollView: {
    padding: 10,
  },
  imgCard: {
    margin: 10,
  },
  listcont: {
    paddingBottom: 80,
  },
  actions: {
    alignSelf: 'flex-end',
  },
  button: {
    paddingRight: 5,
  },
});
