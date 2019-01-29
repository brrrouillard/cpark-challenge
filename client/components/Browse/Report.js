import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export class Report extends Component {
  state = {
    backgroundColor: "red"
  }
  render() {
    return (
      <View style={{backgroundColor: (this.props.index % 2) == 0 ? "red" : "blue"}}>
        <Text style={styles.text}>{this.props.report.position.coordinates[0]}</Text>
        <Text>{(this.props.index % 2) == 2 ? "pair" : "impair"}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 32
  }
});

export default Report;
