import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";
import NavBar from "./NavBar";

export default function RootLayout() {
  return (
    <View style={styles.backgroundContainer}>
      <NavBar></NavBar>
      <Stack>
        <Stack.Screen name="index" options={options} />
        <Stack.Screen name="screens/GetSSData" options={options} />
      </Stack>
    </View>
  );
}

const options = {
  headerShown: false,
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: "grey",
  },
});
