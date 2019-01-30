import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import BrowseReportsPage from "./components/BrowseReports/BrowseReportsPage";
import SubmitReportPage from "./components/SubmitReport/SubmitReportPage";

const TabNavigator = createBottomTabNavigator(
  {
    Browse: BrowseReportsPage,
    Submit: SubmitReportPage
  },
  {
    tabBarOptions: {
      activeTintColor: "#fff",
      activeBackgroundColor: "#17a2b8",
      inactiveTintColor: "#17a2b8",
      labelStyle: {
        fontWeight: "bold",
        marginBottom: 10,
        fontSize: 24
      }
    }
  }
);

export default createAppContainer(TabNavigator);
