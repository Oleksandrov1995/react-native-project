import { StyleSheet, View } from "react-native";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen";
import { LoginScreen } from "./src/Screens/LoginScreen";
import { BackgroundImage } from "./src/BackgroundImage/BackgroundImage";
import backgroundSource from "./src/Images/background.jpg";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <BackgroundImage imageSource={backgroundSource}>
        {/* <RegistrationScreen fontLoaded={fontsLoaded} /> */}
        <LoginScreen fontLoaded={fontsLoaded}/>
      </BackgroundImage>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   },
});
