import React from "react";
import { Text, StyleSheet, ScrollView, Dimensions } from "react-native";

function GetSSBData() {
  let xOffset: number = 0;
  const calcPage = (xOffset: number): number => {
    return 0;
  };

  return (
    <ScrollView
      style={styles.background}
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={true}
      onScroll={(event) => {
        xOffset = event.nativeEvent.contentOffset.x;
        console.log(xOffset);
      }}
      scrollEventThrottle={16}
    >
      <Text style={styles.startButton}>Page 1</Text>
      <Text style={styles.startButton}>Page 2</Text>
      <Text style={styles.startButton}>Page 3</Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  startButton: {
    width: Dimensions.get("window").width,
    backgroundColor: "green",
  },
});
export default GetSSBData;
