import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

function SWSprzResult(props: Readonly<{ length: number }>) {
  return (
    <View style={styles.background}>
      <Image source={require("../../../../assets/images/Test.png")} />
      <Text style={styles.textStyle}>Länge des Spreizbalkens:</Text>
      <Text style={styles.textStyle}>{props.length} cm</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    margin: 20,
    padding: 20,
    alignItems: "center",
    backgroundColor: "white",
  },
  textStyle: {
    flex: 1,
    padding: 10,
    marginTop: 20,
  },
});
export default SWSprzResult;
