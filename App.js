import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import "react-native-gesture-handler";
import { MainNavigator } from "./src/routes/MainNavigator";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <MainNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
