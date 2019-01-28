import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>cPark Reports</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: "#17a2b8"
  },
  text: {
    textAlign: "center",
    color: "#fff",
    fontSize: 64,
    marginTop: 30,
    fontWeight: "bold"
  }
});

export default Header;
