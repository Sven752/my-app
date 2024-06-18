import React from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import SelectConstType from "./Components/SelectConstType";
import { Link, usePathname } from "expo-router";

function GetSSData() {
  return (
    <ScrollView style={styles.background}>
      <Text style={styles.startButton}>12345</Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  startButton: {
    flex: 1,
    backgroundColor: "green",
  },
});
export default GetSSData;
