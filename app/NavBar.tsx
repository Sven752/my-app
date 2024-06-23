import { router, usePathname } from "expo-router";
import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

function NavBar() {
  const path: string = usePathname();

  function routeHome(): void {
    if (path !== "/") router.push("/");
  }

  return (
    <View style={styles.background}>
      <View style={styles.imageContainter}>
        <TouchableOpacity onPress={() => routeHome()}>
          <Image
            source={require("../assets/images/home-icon.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.remainingContent} />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 0.1,
    flexDirection: "row",
    marginTop: 20,
  },
  image: {
    flex: 1,
    resizeMode: "contain",
  },
  imageContainter: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  remainingContent: {
    flex: 0.8,
  },
});
export default NavBar;
