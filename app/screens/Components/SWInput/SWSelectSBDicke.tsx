import { SWProps, SWType } from "@/app/dataHandling/SWData";
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Dimensions,
} from "react-native";

function SWSelectSBDicke(props: Readonly<SWProps>) {
  const updateSWData = (newValue: string): void => {
    const updatedProps: SWType = {
      height: props.SWData.keilSize,
      width: props.SWData.width,
      balkenDicke: props.SWData.balkenDicke,
      keilSize: props.SWData.keilSize,
      sbDicke: Number.parseInt(newValue),
    };
    props.setSWData(updatedProps);
  };

  return (
    <View style={styles.background}>
      <Image source={require("@/assets/images/Test.png")} />
      <Text style={styles.textStyle}>
        Bitte gib die Dicke der verwendeten Balken für den Streichbalen an.
      </Text>
      <Image source={require("@/assets/images/Test.png")} />
      <Text style={styles.textStyle}>
        Wenn kein quadratischer Querschnitt vorhanden ist gib bitte die Höhe des
        Balkens an.
      </Text>
      <TextInput
        style={styles.textInputStyle}
        placeholder="[cm]"
        keyboardType="numeric"
        onChangeText={(newText) => {
          updateSWData(newText);
        }}
      />
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
  textInputStyle: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    minWidth: Dimensions.get("window").width / 5,
  },
});
export default SWSelectSBDicke;
