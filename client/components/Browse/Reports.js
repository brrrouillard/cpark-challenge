import React, { Component } from "react";

import Report from "./Report";

export class Reports extends Component {
  render() {
    return this.props.reportsList.map((report, index) => (
      <Report 
      key={report._id} 
      report={report} 
      index={index} 
      userPosition={this.props.userPosition}
      />
    ));
  }
}

export default Reports;
