import React from "react";
import { StyleSheet, TouchableOpacity, Image, Text } from "react-native";

function SelectConstType() {
  const constructionType: String = "Test";
  return (
    <TouchableOpacity
      style={styles.background}
      onPress={() => console.log(constructionType)}
    >
      <Image source={require("../../../assets/images/Test.png")} />
      <Text style={styles.textStyle}>This is a titel for a construction</Text>
    </TouchableOpacity>
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
  },
});
export default SelectConstType;
