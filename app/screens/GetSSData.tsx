import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SelectConstType from "./Components/SelectConstType";
import { Link } from "expo-router";

function GetSSData() {
  return (
    <ScrollView style={styles.background}>
      <Text style={styles.startButton}>12345</Text>
      <Link href={"/"}>hallo</Link>
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
