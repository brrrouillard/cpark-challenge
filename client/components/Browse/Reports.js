import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import Report from "./Report";

export class Reports extends Component {
  render() {
    return this.props.reportsList.map((report, index) => (
      <Report 
      key={report._id} 
      report={report} 
      index={index} 
      />
    ));
  }
}

export default Reports;
