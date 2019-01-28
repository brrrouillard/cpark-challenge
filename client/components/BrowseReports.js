import React, { Component } from "react";
import { StyleSheet, ScrollView, Text, Button } from "react-native";

const apiURL = "https://cpark-reports.herokuapp.com/report/";

export class BrowseReports extends Component {
  componentDidMount() {
    fetch(apiURL)
      .then(res => res.json())
      .then(res => alert(res))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Button title="Fetch" />
        <Text style={styles.test}>
          Lat : {this.props.userPosition.lat}
        </Text>
        <Text style={styles.test}>Lon : {this.props.userPosition.lon}</Text>
      </ScrollView>
    );
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

export default BrowseReports;
