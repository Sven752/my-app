import { router } from "expo-router";
import React from "react";
import { Button, View, StyleSheet } from "react-native";

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

function SSBContinue(props: Readonly<SSBProps>) {
  return (
    <View style={styles.background}>
      <Button
        title="Berechne Maße"
        onPress={() => {
          router.push(
            `screens/ViewSSBResults?height=${props.SSBData.height}&width=${props.SSBData.width}&balkenDicke=${props.SSBData.balkenDicke}&keilSize=${props.SSBData.keilSize}` as any
          );
          console.log(props.SSBData);
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
    justifyContent: "center",
    backgroundColor: "white",
  },
});
export default SSBContinue;
