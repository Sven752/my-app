import { SWProps } from "@/app/dataHandling/SWData";
import { router } from "expo-router";
import React from "react";
import { View, StyleSheet, Button } from "react-native";

function SWContinue(props: Readonly<SWProps>) {
  return (
    <View style={styles.background}>
      <Button
        title="Berechne Maße"
        onPress={() =>
          router.push(
            `screens/ViewSWResults?height=${props.SWData.height}&width=${props.SWData.width}&balkenDicke=${props.SWData.balkenDicke}&sbDicke=${props.SWData.sbDicke}&keilSize=${props.SWData.keilSize}` as any
          )
        }
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
export default SWContinue;
