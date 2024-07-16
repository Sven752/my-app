import React, { useState } from "react";
import { ScrollView, View, StyleSheet, Dimensions } from "react-native";
import { useLocalSearchParams } from "expo-router";
import PaginationDot from "react-native-animated-pagination-dot";

import CalculateSW from "../dataHandling/CalculateSW";
import { SWResult, SWType } from "../dataHandling/SWData";
import SWSprzResult from "./Components/SWResults/SWSprzResult";
import SWSBResult from "./Components/SWResults/SWSBResult";
import SWStrebeResult from "./Components/SWResults/SWStrebeResult";
import SWKnaggeResult from "./Components/SWResults/SWKnaggeResult";
import SWZangeResult from "./Components/SWResults/SWZangeResult";
import SWSpnnResult from "./Components/SWResults/SWSpnnResult";

function ViewSWResults() {
  //handle Pagination
  const [page, setPage] = useState(0);

  const updatePage = (xOffset: number): void => {
    setPage(Math.floor(xOffset / Dimensions.get("window").width));
  };

  //handle data passing from url
  const { width, height, balkenDicke, sbDicke, keilSize } =
    useLocalSearchParams<{
      width: string;
      height: string;
      balkenDicke: string;
      sbDicke: string;
      keilSize: string;
    }>();

  throwIfUndefined(width);
  throwIfUndefined(height);
  throwIfUndefined(balkenDicke);
  throwIfUndefined(sbDicke);
  throwIfUndefined(keilSize);
  console.log(height);

  const inputSWData: SWType = {
    width: Number.parseFloat(width),
    height: Number.parseFloat(height),
    balkenDicke: Number.parseFloat(balkenDicke),
    keilSize: Number.parseFloat(keilSize),
    sbDicke: Number.parseFloat(sbDicke),
  };

  //calculate SSB values
  const SWCalculator = new CalculateSW(inputSWData);
  const SWResults: SWResult = SWCalculator.outputData;
  console.log(SWResults);

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
          <SWSprzResult length={SWResults.sprzLength} />
        </View>

        <View style={styles.page}>
          <SWSpnnResult length={SWResults.spnnLength} />
        </View>

        <View style={styles.page}>
          <SWSBResult length={SWResults.sbLength} />
        </View>

        <View style={styles.page}>
          <SWStrebeResult
            longLength={SWResults.strbLengthLong}
            shortLength={SWResults.strbLengthShort}
            alphaAngle={SWResults.strbAlphaAngel}
            bravoAngle={SWResults.strbBravoAngel}
          />
        </View>

        <View style={styles.page}>
          <SWKnaggeResult
            length={SWResults.knaggeLength}
            minThickness={SWResults.knaggeMinHeight}
          />
        </View>

        <View style={styles.page}>
          <SWZangeResult length={SWResults.zangeLength} />
        </View>
      </ScrollView>
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
  scrollview: {
    flex: 1,
  },
  page: {
    width: Dimensions.get("window").width,
  },
  paginationDots: {
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

function throwIfUndefined<T>(x: T | undefined): asserts x is T {
  if (typeof x === "undefined") throw new Error("Deez Nuts");
}

export default ViewSWResults;
