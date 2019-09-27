import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const Header = props => {
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Header;
