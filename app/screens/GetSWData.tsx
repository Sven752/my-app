import React, { useState } from "react";
import { ScrollView, View, StyleSheet, Dimensions } from "react-native";
import PaginationDot from "react-native-animated-pagination-dot";
import SWSelectWidth from "./Components/SWInput/SWSelectWidth";
import SWSelectHeight from "./Components/SWInput/SWSelectHeight";
import SWSelectBalkenDicke from "./Components/SWInput/SWSelectBalkenDicke";
import SWSelectSBDicke from "./Components/SWInput/SWSelectSBDicke";
import SWSelectKeilSize from "./Components/SWInput/SWSelectKeilSize";
import SWContinue from "./Components/SWInput/SWContinue";
import { SWType } from "../dataHandling/SWData";

export function GetSWData() {
  //handle Pagination
  const [page, setPage] = useState(0);
  const updatePage = (xOffset: number): void => {
    setPage(Math.floor(xOffset / Dimensions.get("window").width));
  };

  //handle Input Data between Pages
  let SWDataZero: SWType = {
    width: 0,
    height: 0,
    balkenDicke: 0,
    sbDicke: 0,
    keilSize: 0,
  };
  const [SWData, setSWData] = useState(SWDataZero);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={styles.scrollview}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          updatePage(event.nativeEvent.contentOffset.x);
        }}
        scrollEventThrottle={16}
      >
        <View style={styles.page}>
          <SWSelectWidth SWData={SWData} setSWData={setSWData} />
        </View>

        <View style={styles.page}>
          <SWSelectHeight SWData={SWData} setSWData={setSWData} />
        </View>

        <View style={styles.page}>
          <SWSelectBalkenDicke SWData={SWData} setSWData={setSWData} />
        </View>

        <View style={styles.page}>
          <SWSelectSBDicke SWData={SWData} setSWData={setSWData} />
        </View>

        <View style={styles.page}>
          <SWSelectKeilSize SWData={SWData} setSWData={setSWData} />
        </View>

        <View style={styles.page}>
          <SWContinue SWData={SWData} setSWData={setSWData} />
        </View>
      </ScrollView>

      <View style={styles.paginationDots}>
        <PaginationDot
          activeDotColor={"black"}
          curPage={page}
          maxPage={6}
          sizeRatio={2}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  scrollview: {
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
export default GetSWData;
