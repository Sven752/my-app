import React, { useState } from "react";
import { Text, StyleSheet, ScrollView, Dimensions, View } from "react-native";
import PaginationDot from "react-native-animated-pagination-dot";
import SelectHeight from "./Components/SelectHeight";
import SelectWidth from "./Components/SelectWidth";
import SelectBalkenDicke from "./Components/SelectBalkenDicke";
import SelectKeilSize from "./Components/SelectKeilSize";
import SSBContinue from "./Components/SSBContinue";

function GetSSBData() {
  type SSBType = {
    width?: number;
    height?: number;
    balkenDicke?: number;
    KeilSize?: number;
  };

  let SSBDataEmpty: SSBType = {};
  SSBDataEmpty.height = 123;

  const [SSBData, setSSBData] = useState(SSBDataEmpty);
  const [page, setPage] = useState(0);
  const updatePage = (xOffset: number): void => {
    setPage(Math.floor(xOffset / Dimensions.get("window").width));
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
        <View style={styles.page}>
          <SelectHeight SSBData={SSBData} setSSBData={setSSBData} />
        </View>
        <View style={styles.page}>
          <SelectWidth SSBData={SSBData} setSSBData={setSSBData} />
        </View>
        <View style={styles.page}>
          <SelectBalkenDicke SSBData={SSBData} setSSBData={setSSBData} />
        </View>
        <View style={styles.page}>
          <SelectKeilSize SSBData={SSBData} setSSBData={setSSBData} />
        </View>
        <View style={styles.page}>
          <SSBContinue SSBData={SSBData} setSSBData={setSSBData} />
        </View>
      </ScrollView>
      <Text>{SSBData.height}</Text>
      <View style={styles.paginationDots}>
        <PaginationDot
          activeDotColor={"black"}
          curPage={page}
          maxPage={5}
          sizeRatio={2}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  page: {
    width: Dimensions.get("window").width,
    backgroundColor: "green",
  },
  paginationDots: {
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default GetSSBData;
