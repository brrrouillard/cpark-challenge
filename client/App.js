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

  getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      console.log("lat : " + position.coords.latitude);
      console.log("lo : " + position.coords.longitude);
      this.setState({
        userPosition: {
          lat: position.coords.latitude,
          lon: position.coords.longitude
        }
      });
    });
  };

  componentDidMount() {
    this.getUserLocation(); // Get user location on startup
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        {this.state.userPosition.lon && (
          <BrowseReportsPage
            userPosition={this.state.userPosition}
            getUserLocation={this.getUserLocation}
          />
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
