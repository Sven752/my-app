import React from "react";
import { View } from "react-native";
import { useLocalSearchParams } from "expo-router";

type SSBType = {
  width: number;
  height: number;
  balkenDicke: number;
  keilSize: number;
};

function ViewSSBResults(props: SSBType) {
  const data = useLocalSearchParams();
  console.log(data);
  return <View></View>;
}

export default ViewSSBResults;
