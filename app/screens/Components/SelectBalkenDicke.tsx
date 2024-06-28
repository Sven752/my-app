import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  Dimensions,
} from "react-native";

type SSBtype = {
  width?: number;
  height?: number;
  balkenDicke?: number;
  keilSize?: number;
};
type SSBProps = {
  SSBData: SSBtype;
  setSSBData: any;
};

function SelectBalkenDicke(props: SSBProps) {
  const updateSSBData = (newValue: string): void => {
    const updatedProps: SSBtype = {
      height: props.SSBData.keilSize,
      width: props.SSBData.width,
      balkenDicke: Number.parseInt(newValue),
      keilSize: props.SSBData.keilSize,
    };
    props.setSSBData(updatedProps);
  };

  return (
    <View style={styles.background}>
      <Image source={require("../../../assets/images/Test.png")} />
      <Text style={styles.textStyle}>
        Bitte gib die Dicke der verwendeten Balken an.
      </Text>
      <Image source={require("../../../assets/images/Test.png")} />
      <Text style={styles.textStyle}>
        Wenn kein quadratischer Querschnitt vorhanden ist gib bitte die Höhe des
        Balkens an.
      </Text>
      <TextInput
        style={styles.textInputStyle}
        placeholder="[cm]"
        keyboardType="numeric"
        onChangeText={(newText) => {
          updateSSBData(newText);
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

export default SelectBalkenDicke;
