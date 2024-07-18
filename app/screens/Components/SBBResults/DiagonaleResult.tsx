import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import ImageModal from "react-native-image-modal";

function DiagonaleResult(
  props: Readonly<{
    longLength: number;
    shortLength: number;
    longLengthHeigth: number;
    alphaAngle: number;
    bravoAngle: number;
  }>
) {
  return (
    <View style={styles.background}>
      <ImageModal
        resizeMode="contain"
        style={styles.imageStyle}
        source={require("@/assets/images/SSB_Images/Results/SSBDiagonale.png")}
      />
      <Text style={styles.textStyleHeader}>Länge A der Diagonale:</Text>
      <Text style={styles.textStyleContent}>
        Innenkante (a) {props.longLength} cm
      </Text>
      <Text style={styles.textStyleContent}>
        Außenkante (b) {props.shortLength} cm
      </Text>
      <Text style={styles.textStyleHeader}>
        Höhe der der Diagonale über Winkel Alpha:
      </Text>
      <Text style={styles.textStyleContent}>{props.longLengthHeigth} cm</Text>
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
export default DiagonaleResult;
