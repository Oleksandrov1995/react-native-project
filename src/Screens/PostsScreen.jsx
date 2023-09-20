import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Post } from "../Components/Post";
import { UserAvatar } from "../Components/User/UserAvatar";
import { UserName } from "../Components/User/UserName";
import { UserEmail } from "../Components/User/UserEmail";

export const PostsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <UserAvatar style={styles.avatar} />
        <View style={styles.userInfo}>
          <UserName style={styles.userName} />
          <UserEmail style={styles.userEmail} />
        </View>
      </View>
      <Post />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  avatar: {
    width: 60,
    height: 60,
  },
  userInfo: {
    flexDirection: "column",
    marginLeft: 8,
  },
  userName: {
    fontWeight: 700,
    fontSize: 13,
  },
  userEmail: {
    color: "rgba(33, 33, 33, 0.8)",
    fontWeight: 400,
    fontSize: 11,
  },
});
