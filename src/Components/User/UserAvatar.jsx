import React from "react";
import { Image, StyleSheet } from "react-native";
import users from "../../data/users.json";

export const UserAvatar = ({ style }) => {
  const user = users[0];

  return <Image source={{ uri: user.avatar }} style={[styles.avatar, style]} />;
};
const styles = StyleSheet.create({
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
});
