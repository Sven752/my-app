import React, { useState } from "react";
import { ScrollView, View, StyleSheet, Dimensions } from "react-native";
import { useLocalSearchParams } from "expo-router";
import PaginationDot from "react-native-animated-pagination-dot";
import TLResult from "./Components/SBBResults/TLResult";
import SBResult from "./Components/SBBResults/SBResult";
import DiagonaleResult from "./Components/SBBResults/DiagonaleResult";
import KnaggeResult from "./Components/SBBResults/KnaggeResult";
import VerSResult from "./Components/SBBResults/VerSResult";
import { CalculateSSB } from "../dataHandling/CalculateSSB";

type SSBType = {
  width: number;
  height: number;
  balkenDicke: number;
  keilSize: number;
};

function ViewSSBResults() {
  //handle Pagination
  const [page, setPage] = useState(0);

  const updatePage = (xOffset: number): void => {
    setPage(Math.floor(xOffset / Dimensions.get("window").width));
  };

  //handle data passing from url
  const { width, height, balkenDicke, keilSize } = useLocalSearchParams<{
    width: string;
    height: string;
    balkenDicke: string;
    keilSize: string;
  }>();

  throwIfUndefined(width);
  throwIfUndefined(height);
  throwIfUndefined(balkenDicke);
  throwIfUndefined(keilSize);

  const inputSSBData: SSBType = {
    width: Number.parseFloat(width),
    height: Number.parseFloat(height),
    balkenDicke: Number.parseFloat(balkenDicke),
    keilSize: Number.parseFloat(keilSize),
  };
  console.log(width);

  //calculate SSB values
  const SSBCalculator = new CalculateSSB(inputSSBData);
  const SSBResults = SSBCalculator.outputData;

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
          <TLResult length={SSBResults.tlLength} />
        </View>

        <View style={styles.page}>
          <SBResult length={SSBResults.sbLength} />
        </View>

        <View style={styles.page}>
          <DiagonaleResult
            length={SSBResults.diagonaleLength}
            angle={SSBResults.diagonaleAngle}
          />
        </View>

        <View style={styles.page}>
          <KnaggeResult
            length={SSBResults.knaggeLength}
            minThickness={SSBResults.knaggeMinHeight}
          />
        </View>

        <View style={styles.page}>
          <VerSResult length={SSBResults.versLength} />
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
  if (typeof x === "undefined") throw new Error("OH NOEZ");
}

export default ViewSSBResults;
