import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

export const RegistrationScreen = ({ fontLoaded }) => {
  const [activeInput, setActiveInput] = useState(null);
  const handleInputFocus = (inputName) => {
    setActiveInput(inputName);
  };

  const handleInputBlur = () => {
    setActiveInput(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.userImageContainer}>
        <TouchableOpacity style={styles.imageAddButton}>
          <AntDesign
            name="pluscircleo"
            size={25}
            color="rgba(255, 108, 0, 1)"
          />
        </TouchableOpacity>
      </View>
      <Text style={[styles.title, fontLoaded && styles.titleFont]}>
        Реєстрація
      </Text>
      <TextInput
        style={[
          styles.input,
          fontLoaded && styles.titleFont,
          { width: "100%" },
          activeInput === "login" && styles.activeInput,
        ]}
        onFocus={() => handleInputFocus("login")}
        onBlur={handleInputBlur}
        placeholder="Логін"
      />
      <TextInput
        style={[
          styles.input,
          fontLoaded && styles.titleFont,
          { width: "100%" },
          activeInput === "email" && styles.activeInput,
        ]}
        onFocus={() => handleInputFocus("email")}
        onBlur={handleInputBlur}
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
          placeholder="Пароль"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.passwordButton}>
          <Text style={styles.passwordButtonText}>Показати</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerbuttonText}>Зареєструватися</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.enterButton}>
        <Text style={styles.enterButtonText}>Вже є акаунт? Увійти</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: 80,
    paddingTop: 92,
    paddingHorizontal: 16,
  },
  userImageContainer: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "rgba(246, 246, 246, 1)",
    transform: [{ translateY: -60 }],
  },
  imageAddButton: {
    marginTop: "auto",
    marginBottom: 14,
    marginLeft: "auto",
    transform: [{ translateX: 12.5 }],
  },
  title: {
    fontSize: 30,
    fontWeight: 500,
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
  registerButton: {
    marginTop: 43,
    backgroundColor: "rgba(255, 108, 0, 1)",
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal: 111,
    alignItems: "center",
  },
  registerbuttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  enterButton: {
    marginTop: 16,
  },
  enterButtonText: {
    color: "rgba(27, 67, 113, 1)",
  },
});
