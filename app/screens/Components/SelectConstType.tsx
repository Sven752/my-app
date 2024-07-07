import { router } from "expo-router";
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  Dimensions,
} from "react-native";

function SelectConstType(props: Readonly<{ title: string; path: string }>) {
  const renderElement = () => {
    if (props.title == "Sprengwerk") {
      return (
        <Image
          style={styles.imageStyle}
          source={require("@/assets/images/Sprengwerk.png")}
        />
      );
    } else if (props.title == "Strebstuetzbock") {
      return (
        <Image
          style={styles.imageStyle}
          source={require("@/assets/images/Strebstuetzbock.png")}
        />
      );
    } else {
      return (
        <Image
          style={styles.imageStyle}
          source={require("@/assets/images/Test.png")}
        />
      );
    }
  };

  return (
    <TouchableOpacity
      style={styles.background}
      onPress={() => router.push(`screens/${props.path}`)}
    >
      {renderElement()}
      <Text style={styles.textStyle}>Hier klicken fuer: {props.title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    margin: 20,
    padding: 20,
    alignItems: "center",
    backgroundColor: "white",
  },
  textStyle: {
    flex: 1,
    padding: 10,
    fontWeight: "bold",
    fontSize: 15,
  },
  imageStyle: {
    resizeMode: "contain",
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").width * 0.8,
  },
});
export default SelectConstType;
