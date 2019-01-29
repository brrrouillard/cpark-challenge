import React from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import Footer from "./components/Footer";
import BrowseReportsPage from "./components/Browse/BrowseReportsPage";

export default class App extends React.Component {
  state = {
    userPosition: {
      lat: null,
      lon: null
    }
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      // Get user location on startup
      this.setState({
        userPosition: {
          lat: position.coords.latitude,
          lon: position.coords.longitude
        }
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        {this.state.userPosition.lon && (
          <BrowseReportsPage userPosition={this.state.userPosition} />
        )}
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
