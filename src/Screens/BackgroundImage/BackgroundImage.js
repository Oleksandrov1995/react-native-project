import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

export const BackgroundImage = ({ children, imageSource }) => {
  return (
    <ImageBackground source={imageSource} resizeMode="cover" style={styles.image}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
