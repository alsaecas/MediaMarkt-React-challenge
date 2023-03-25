import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./src/routes/Routes";

export default function App() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
