import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SelectConstType from "./Components/SelectConstType";

function WelcomeScreen() {
  return (
    <ScrollView style={styles.background}>
      <Text style={styles.startButton}>12345</Text>
      <SelectConstType />
      <SelectConstType />
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
export default WelcomeScreen;
