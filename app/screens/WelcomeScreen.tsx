import React from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import SelectConstType from "./Components/SelectConstType";

function WelcomeScreen() {
  return (
    <ScrollView style={styles.background}>
      <SelectConstType title="Strebstuetzbock" path="GetSSBData" />
      <SelectConstType title="Sprengwerk" path="GetSWData" />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
export default WelcomeScreen;
