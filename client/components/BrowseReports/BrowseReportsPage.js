import React, { Component } from "react";
import { StyleSheet, ScrollView, View, Text, Button } from "react-native";

import Header from "../Header";
import Reports from "./Reports";

const apiURL = "https://cpark-reports.herokuapp.com/report/";

export class BrowseReportsPage extends Component {
  constructor() {
    super();
    this.state = {
      reports: [],
      userPosition: {
        lat: null,
        lon: null
      },
      loading: false
    };
  }

  getSurroundingPoints = () => {
    navigator.geolocation.getCurrentPosition(position => {
      // First we get user location
      console.log("lat : " + position.coords.latitude);
      console.log("lo : " + position.coords.longitude);
      this.setState(
        {
          userPosition: {
            lat: position.coords.latitude,
            lon: position.coords.longitude
          },
          loading: true
        },
        () => {
          // Then we get surrounding points from the API
          fetch(
            `${apiURL}${this.state.userPosition.lat}/${
              this.state.userPosition.lon
            }`
          )
            .then(res => res.json())
            .then(data => {
              console.log("my data", data);
              this.setState({ reports: data, loading: false });
            })
            .catch(err => alert(err));
        }
      );
    });
  };

  componentWillMount() {
    this.getSurroundingPoints();
  }

  render() {
    if (this.state.loading) {
      return (
        <View>
          <Header />
          <Text style={styles.test}>Loading...</Text>
        </View>
      );
    } else {
      return (
        <ScrollView style={styles.container}>
          <Header />
          <Button title="Refresh" onPress={this.getSurroundingPoints} />
          <Reports reportsList={this.state.reports} />
          <Text>{this.state.name}</Text>
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f6f6"
  },
  test: {
    fontSize: 48
  }
});

export default BrowseReportsPage;
