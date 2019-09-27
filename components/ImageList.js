import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import axios from 'axios';
import {Button, Card, IconButton} from 'react-native-paper';

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
          <Card style={styles.imgCard} key={item.id}>
            <Card.Cover source={{uri: item.largeImageURL}} />
            <Card.Actions style={styles.actions}>
              <Button
                style={styles.button}
                icon="info"
                mode="text"
                color="#cf363b"
                onPress={() => console.log('Pressed')}>
                Info
              </Button>
              <Button
                style={styles.button}
                icon="save"
                mode="text"
                color="#cf363b"
                onPress={() => console.log('Pressed')}>
                Save
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
