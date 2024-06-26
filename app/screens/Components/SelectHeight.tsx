import React, { useState } from "react";
import { Text, StyleSheet, View, Image, TextInput } from "react-native";

type SSBtype = {
  width?: number;
  height?: number;
  balkenDicke?: number;
  KeilSize?: number;
};
type SSBProps = {
  SSBData: SSBtype;
  setSSBData: any;
};

function SelectHeight(props: SSBProps) {
  const [inputValue, setInputValue] = React.useState("asf");

  const updateSSBData = (): void => {};

  return (
    <View style={styles.background}>
      <Image source={require("../../../assets/images/Test.png")} />
      <Text style={styles.textStyle}>Bitte gib die Abzustützende Höhe an</Text>
      <TextInput
        placeholder="[cm]"
        keyboardType="numeric"
        onChangeText={(newText) => setInputValue(newText)}
      ></TextInput>
      <Text>{inputValue}</Text>
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

export default SelectHeight;
