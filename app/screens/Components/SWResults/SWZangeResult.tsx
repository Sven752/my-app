import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";

function SWZangeResult(props: Readonly<{ length: number }>) {
  return (
    <View style={styles.background}>
      <Image
        style={styles.imageStyle}
        source={require("@/assets/images/SW_Images/Results/SWZange.png")}
      />
      <Text style={styles.textStyleHeader}>Länge der Zange:</Text>
      <Text style={styles.textStyleContent}>{props.length} cm</Text>
      <Text style={styles.textStyleContent}>
        Es werden insgesamt 2 Zangen benötigt
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
export default SWZangeResult;
