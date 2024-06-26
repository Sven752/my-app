import React from "react";
import { Text } from "react-native";

type SSBtype = {
  width?: number;
  height?: number;
  balkenDicke?: number;
  KeilSize?: number;
};
type SSBProps = {
  SSBData: SSBtype;
};

function SelectKeilSize(props: SSBProps) {
  return <Text>SelectKeilSize</Text>;
}

export default SelectKeilSize;
