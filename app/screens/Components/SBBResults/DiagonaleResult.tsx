import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

function DiagonaleResult(props: Readonly<{ length: number; angle: number }>) {
  return (
    <View style={styles.background}>
      <Image source={require("../../../../assets/images/Test.png")} />
      <Text style={styles.textStyle}>Länge der Diagonale:</Text>
      <Text style={styles.textStyle}>{props.length} cm</Text>
      <Text style={styles.textStyle}>Winkel der Anschnittkante:</Text>
      <Text style={styles.textStyle}>{props.angle} cm</Text>
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
export default DiagonaleResult;
