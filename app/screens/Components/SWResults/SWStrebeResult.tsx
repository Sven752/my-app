import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";

function SWStrebeResult(
  props: Readonly<{
    longLength: number;
    shortLength: number;
    alphaAngle: number;
    bravoAngle: number;
  }>
) {
  return (
    <View style={styles.background}>
      <Image
        style={styles.imageStyle}
        source={require("@/assets/images/SW_Images/Results/SWStrebe.png")}
      />
      <Text style={styles.textStyleHeader}>Länge A der Diagonale:</Text>
      <Text style={styles.textStyleContent}>
        Innenkante (a) {props.longLength} cm
      </Text>
      <Text style={styles.textStyleContent}>
        Außenkante (b) {props.shortLength} cm
      </Text>
      <Text style={styles.textStyleHeader}>Winkel der Anschnittkante:</Text>
      <Text style={styles.textStyleContent}>
        Alpha: {props.alphaAngle} Grad
      </Text>
      <Text style={styles.textStyleContent}>
        Bravo: {props.bravoAngle} Grad
      </Text>
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
  textStyleHeader: {
    flex: 1,
    fontWeight: "bold",
    paddingTop: 50,
  },
  textStyleContent: {
    flex: 0.5,
  },
  imageStyle: {
    resizeMode: "contain",
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").width * 0.8,
  },
});
export default SWStrebeResult;
