import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";

// Sample Home Screen
export default function ProductScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Stack.Screen options={{ title: "Product" }} />

      <Text>Home Screen. Product ID: {id}</Text>
    </View>
  );
}
