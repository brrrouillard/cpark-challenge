import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export class Report extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: this.props.index % 2 == 0 ? "#e0ecec" : "#fff",
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <Text>
          {this.props.report.title}
          {" : "}
        </Text>
        <Text style={styles.text}>
          {this.props.report.dist.calculated}{" meters away"}
        </Text>
        <Text>Hello</Text>
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
