import React from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import Footer from "./components/Footer";
import BrowseReportsPage from "./components/Browse/BrowseReportsPage";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <BrowseReportsPage />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
