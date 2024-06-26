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

function SelectWidth(props: SSBProps) {
  return <Text>SelectWidht</Text>;
}

export default SelectWidth;
