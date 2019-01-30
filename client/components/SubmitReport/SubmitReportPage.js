import React, { Component } from "react";
import { View, Text } from "react-native";

import Header from "../Header";
import SubmitReportForm from "./SubmitReportForm";

export class SubmitReportPage extends Component {
  constructor() {
    super();
    this.state = {
      userPosition: {
        lat: null,
        lon: null
      },
      loading: true
    };
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState(
        {
          userPosition: {
            lat: position.coords.latitude,
            lon: position.coords.longitude
          },
          loading: true
        },
        () => {
          this.setState({ loading: false });
        }
      );
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <View
          style={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return (
        <View>
          <Header />
          <Text style={{
              fontSize: 36,
              textAlign: "center",
              fontWeight: "bold",
              padding: 10,
              color: "#333"
          }}>Add a Report</Text>
          <SubmitReportForm userPosition={this.state.userPosition} />
        </View>
      );
    }
  }
}

export default SubmitReportPage;
