import React, { useState } from "react";
import { Text, StyleSheet, ScrollView, Dimensions, View } from "react-native";
import PaginationDot from "react-native-animated-pagination-dot";

function GetSSBData() {
  const [page, setPage] = useState(0);
  const updatePage = (xOffset: number): void => {
    setPage(Math.floor(xOffset / Dimensions.get("window").width));
    //console.log(Math.floor(xOffset / Dimensions.get("window").width));
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={styles.background}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={true}
        onScroll={(event) => {
          updatePage(event.nativeEvent.contentOffset.x);
        }}
        scrollEventThrottle={16}
      >
        <Text style={styles.startButton}>Page 1</Text>
        <Text style={styles.startButton}>Page 2</Text>
        <Text style={styles.startButton}>Page 3</Text>
      </ScrollView>
      <PaginationDot activeDotColor={"black"} curPage={page} maxPage={3} />
    </View>
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
  paginationDots: {
    height: 50,
  },
});
export default GetSSBData;
