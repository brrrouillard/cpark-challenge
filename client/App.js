import React from 'react';
import { StyleSheet, Text, View, Platform} from 'react-native';

import Header from "./components/Header";

export default class App extends React.Component {
  componentDidMount() {
    if (Platform.OS == "android")
    alert(Platform.Version);
  }
  render() {
    return (
      <View style={styles.container}>
        <Header />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
