import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export const LoginScreen = ({ fontLoaded }) => {
  return (
    <View style={styles.container}>
      <Text
        style={[styles.title, fontLoaded && { fontFamily: "Roboto-Regular" }]}
      >
        Увійти
      </Text>
      <TextInput
        style={[styles.input, fontLoaded && { fontFamily: "Roboto-Regular" }]}
        placeholder="Адреса електронної пошти"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, fontLoaded && { fontFamily: "Roboto-Regular" }]}
          placeholder="Пароль"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.passwordButton}>
          <Text style={styles.passwordButtonText}>Показати</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Увійти</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>
          Немає акаунту? Зареєструватися
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    marginTop: "auto",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: 145,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
    marginBottom: 20,
  },
  input: {
    width: 343,
    height: 50,
    borderColor: "rgba(232, 232, 232, 1)",
    borderWidth: 1,
    marginBottom: 16,
    paddingStart: 16,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderRadius: 5,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  passwordButton: {
    backgroundColor: "rgba(246, 246, 246, 1)",
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
