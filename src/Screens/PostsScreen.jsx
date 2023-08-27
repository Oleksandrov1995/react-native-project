import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  LogOutIcon,
  PostsScreenIcon,
  CreatePostIcon,
  ProfileScreenIcon,
} from "../Components/Icons";
import { useNavigation } from '@react-navigation/native';

export const PostsScreen = ({ fontLoaded }) => {
    const navigation = useNavigation();
  const handleLogout = () => {
    navigation.navigate('LoginScreen')
  };

  return (
    <View style={styles.container}>
        

      <View style={styles.header}>
        <Text style={[styles.title, fontLoaded && styles.titleFont]}>Публікації</Text>

        <TouchableOpacity style={styles.logOutButton} onPress={handleLogout}>
          <LogOutIcon width={24} height={24} color="none" />
        </TouchableOpacity>
      </View>

      <View style={styles.navMenu}>
        <TouchableOpacity onPress={() => navigation.navigate('PostsScreen')}>
          <PostsScreenIcon width={40} height={40} color="none" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.activeIcon} onPress={() => navigation.navigate("CreatePostsScreen")}>
        <CreatePostIcon width={40} height={40} fill="#ffffff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
        <ProfileScreenIcon width={40} height={40} color="#212121" fill = "none" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
    paddingTop: 41,
    paddingRight: 16,
    paddingBottom: 11,
  
  },
  title: {
    color: "rgba(33, 33, 33, 1)",
    fontSize: 17,
    justifyContent: "center",
    lineHeight: 22,
  },
  logOutButton: { position: "absolute", right: 16,
bottom:11 },
  navMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#BDBDBD",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 9,
    paddingRight: 81,
    paddingBottom: 22,
    paddingLeft: 81,
  },
  activeIcon:{
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
    alignContent: "center",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center", 
  }
});
