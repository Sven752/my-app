import { StyleSheet } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";

export default function Index() {
  return <WelcomeScreen></WelcomeScreen>;
}
const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: "grey",
  },
});
