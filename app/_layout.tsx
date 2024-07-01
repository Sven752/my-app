import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";
import NavBar from "./NavBar";

export default function RootLayout() {
  return (
    <View style={styles.backgroundContainer}>
      <NavBar></NavBar>
      <Stack>
        <Stack.Screen name="index" options={options} />
        <Stack.Screen name="screens/GetSSBData" options={options} />
        <Stack.Screen name="screens/GetSWData" options={options} />
        <Stack.Screen name="screens/ViewSSBResults" options={options} />
        <Stack.Screen name="screens/ViewSWResults" options={options} />
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
