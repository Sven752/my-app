import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";

function SWSBResult(props: Readonly<{ length: number }>) {
  return (
    <View style={styles.background}>
      <Image
        style={styles.imageStyle}
        source={require("@/assets/images/SW_Images/Results/SWStreichBalken.png")}
      />
      <Text style={styles.textStyle}>Länge des Streichbalkens:</Text>
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
  imageStyle: {
    resizeMode: "contain",
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").width * 0.8,
  },
});
export default SWSBResult;
