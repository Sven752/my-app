import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";

function SBResult(props: Readonly<{ length: number }>) {
  return (
    <View style={styles.background}>
      <Image
        style={styles.imageStyle}
        source={require("@/assets/images/SSB_Images/Results/SSBStreichbalken.png")}
      />
      <Text style={styles.textStyleHeader}>Länge des Streichbalkens:</Text>
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
export default SBResult;
