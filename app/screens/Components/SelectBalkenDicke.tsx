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

function SelectBalkenDicke(props: SSBProps) {
  return <Text>Balkendicke</Text>;
}

export default SelectBalkenDicke;
