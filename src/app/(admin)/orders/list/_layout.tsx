import { Tabs, withLayoutContext } from "expo-router";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import OrdersScreen from ".";
import ArchiveScreen from "./archive";

const Tab = createMaterialTopTabNavigator();

export default function OrderListNavigator() {
  return (
    <SafeAreaView
      edges={["top"]}
      style={{ flex: 1, backgroundColor: "white" }}
    >
      <Tab.Navigator>
        <Tab.Screen
          name="index"
          component={OrdersScreen}
        />
        <Tab.Screen
          name="archive"
          component={ArchiveScreen}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
