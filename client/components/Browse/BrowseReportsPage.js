import React, { Component } from "react";
import { StyleSheet, ScrollView, View, Text, Button } from "react-native";

import Reports from "./Reports";

const apiURL = "https://cpark-reports.herokuapp.com/report/";

export class BrowseReportsPage extends Component {
  constructor() {
    super();
    this.state = {
      reports: []
    };
  }

  componentDidMount() {
    console.log(
      `${apiURL}${this.props.userPosition.lat}/${this.props.userPosition.lon}`
    );
    fetch(
      `${apiURL}${this.props.userPosition.lat}/${this.props.userPosition.lon}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ reports: data });
      })
      .catch(err => alert(err));
  }
  render() {
    if (this.state.reports.length < 1) {
      return (
        <View>
          <Text style={styles.test}>Loading...</Text>
        </View>
      );
    }
    return (
      <ScrollView style={styles.container}>
        <Reports
          reportsList={this.state.reports}
        />
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

export default BrowseReportsPage;
