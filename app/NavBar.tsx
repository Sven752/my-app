import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

function NavBar() {
  return (
    <View style={styles.background}>
      <Image
        source={require("../assets/images/home-icon.svg")}
        height={10}
        width={10}
        resizeMode="contain"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 0.1,
    flexDirection: "row",
  },
});
export default NavBar;
