import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export class Footer extends Component {
    doNothing(){ // TO CHANGE
        let x;
    }
  render() {
    return (
      <View style={styles.container}>
        <Button title="Browse" style={styles.button} onPress={this.doNothing}/>
        <Button title="Add" onPress={this.doNothing}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: "#17a2b8",
      display: "flex"
  },
  button: {
    backgroundColor: "red"
  },
  text: {
    color: "#fff",
    fontSize: 48,
    fontWeight: "bold",
    padding: 5
  }
});

export default Footer;
