import React from "react";
import { View, StyleSheet, Image, Text, Dimensions } from "react-native";

function SWSprzResult(props: Readonly<{ length: number }>) {
  return (
    <View style={styles.background}>
      <Image
        style={styles.imageStyle}
        source={require("@/assets/images/SW_Images/Results/SWSpreizBalken.png")}
      />
      <Text style={styles.textStyleHeader}>Länge des Spreizbalkens:</Text>
      <Text style={styles.textStyleContent}>{props.length} cm</Text>
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
export default SWSprzResult;
