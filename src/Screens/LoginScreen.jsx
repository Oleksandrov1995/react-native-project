import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { BackgroundImage } from "../Components/BackgroundImage";
import backgroundSource from "../Images/background.jpg";

export const LoginScreen = ({ fontLoaded }) => {
  const [activeInput, setActiveInput] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleInputFocus = (inputName) => {
    setActiveInput(inputName);
  };

  const handleInputBlur = () => {
    setActiveInput(null);
  };

  const handleFormSubmit = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    setEmail("");
    setPassword("");
    navigation.navigate("PostsScreen");
  };

  return (
    <BackgroundImage imageSource={backgroundSource}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={-80}
        >
          <View style={styles.container}>
            <Text style={[styles.title, fontLoaded && styles.titleFont]}>
              Увійти
            </Text>
            <TextInput
              style={[
                styles.input,
                fontLoaded && styles.titleFont,
                { width: "100%" },
                activeInput === "email" && styles.activeInput,
              ]}
              onFocus={() => handleInputFocus("email")}
              onBlur={handleInputBlur}
              value={email}
              onChangeText={setEmail}
              placeholder="Адреса електронної пошти"
            />
            <View style={styles.passwordContainer}>
              <TextInput
                style={[
                  styles.input,
                  fontLoaded && styles.titleFont,
                  { width: "100%" },
                  activeInput === "password" && styles.activeInput,
                ]}
                onFocus={() => setActiveInput("password")}
                onBlur={() => setActiveInput(null)}
                value={password}
                onChangeText={setPassword}
                placeholder="Пароль"
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                style={styles.passwordButton}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Text style={styles.passwordButtonText}>
                  {showPassword ? "Приховати" : "Показати"}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleFormSubmit}
            >
              <Text style={styles.loginButtonText}>Увійти</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={() => navigation.navigate("RegistrationScreen")}
            >
              <Text style={styles.registerButtonText}>
                Немає акаунту? Зареєструватися
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: 111,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
    marginBottom: 20,
  },
  titleFont: {
    fontFamily: "Roboto-Regular",
  },
  input: {
    height: 50,
    borderColor: "rgba(232, 232, 232, 1)",
    borderWidth: 1,
    marginBottom: 16,
    paddingStart: 16,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderRadius: 5,
  },
  activeInput: {
    borderColor: "rgba(255, 108, 0, 1)",
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  passwordButton: {
    padding: 8,
    borderRadius: 5,
    position: "absolute",
    right: 16,

    transform: [{ translateY: -8 }],
  },
  passwordButtonText: {
    color: "rgba(27, 67, 113, 1)",
  },
  loginButton: {
    marginTop: 43,
    backgroundColor: "rgba(255, 108, 0, 1)",
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal: 111,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  registerButton: {
    marginTop: 16,
  },
  registerButtonText: {
    color: "rgba(27, 67, 113, 1)",
  },
});
