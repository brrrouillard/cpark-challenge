import React, { Component } from "react";
import { View, StyleSheet, Button, TextInput, Text } from "react-native";
import axios from "axios";

const apiURL = "https://cpark-reports.herokuapp.com/report/";

export default class SubmitReportForm extends Component {
  constructor() {
    super();
    this.state = {
      style: {
        // Will be used for animation on input focus
        borderWidth: 1,
        borderRadius: 4
      },
      text: "",
      infoMessage: {
        value: "",
        style: {
          color: "red"
        }
      }
    };
  }

  handleSubmit = () => {
    if (this.state.text == "")
      this.setState({
        infoMessage: { value: "Please enter a valid title", color: "red" }
      });
    else {
      axios
        .post(apiURL, {
          title: this.state.text,
          lat: this.props.userPosition.lat,
          lon: this.props.userPosition.lon
        })
        .then(response => {
          this.setState({
            infoMessage: { value: "Report submitted!" },
            text: ""
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.infoMessage, this.state.infoMessage.style]}>
          {this.state.infoMessage.value}
        </Text>
        <View>
          <TextInput
            style={[styles.text, { borderWidth: 1 }]}
            value={"Lat : " + this.props.userPosition.lat}
            editable={false}
            selectTextOnFocus={false}
          />
          <TextInput
            style={[styles.text, { borderWidth: 1 }]}
            value={"Lon : " + this.props.userPosition.lon}
            editable={false}
            selectTextOnFocus={false}
          />
          <TextInput
            style={[styles.text, this.state.style]}
            placeholder="Title"
            onFocus={() => {
              this.setState({
                style: {
                  borderWidth: 3,
                  borderRadius: 6
                }
              });
            }}
            onBlur={() => {
              this.setState({
                style: {
                  borderWidth: 1,
                  borderRadius: 4
                }
              });
            }}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Button title="Send" onPress={this.handleSubmit} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    fontSize: 20
  },
  text: {
    padding: 15,
    color: "#333",
    margin: 5,
    fontSize: 24,
    borderColor: "#17a2b8",
    borderRadius: 4
  },
  infoMessage: {
    textAlign: "center",
    fontSize: 20,
    padding: 5,
    fontWeight: "100"
  }
});
