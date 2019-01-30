import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export class Report extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: this.props.index % 2 == 0 ? "#e0ecec" : "#fff",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
          padding: 5
        }}
      >
        <Text style={styles.title}>{this.props.report.title}</Text>
        <Text style={styles.distance}>
          {Math.round(this.props.report.dist.calculated * 100) / 100}
          {"m"}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "65%",
    color: "#333",
  },
  distance: {
    fontSize: 28,
    fontWeight: "200",
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "35%",
    color: "#333",
  }
});

export default Report;
