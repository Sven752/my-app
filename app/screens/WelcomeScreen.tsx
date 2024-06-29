import React from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import SelectConstType from "./Components/SelectConstType";

function WelcomeScreen() {
  return (
    <ScrollView style={styles.background}>
      <SelectConstType />
      <SelectConstType />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
export default WelcomeScreen;
