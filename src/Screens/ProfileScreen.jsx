import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BackgroundImage } from "../Components/BackgroundImage";
import backgroundSource from "../Images/background.jpg";
import { LogOutBtn } from "../Components/LogOutBtn";
import { UserAvatar } from "../Components/User/UserAvatar";
import { UserName } from "../Components/User/UserName";
import { Post } from "../Components/Post";

export const ProfileScreen = () => {
  return (
    <BackgroundImage imageSource={backgroundSource}>
      <View style={styles.container}>
        <View style={styles.userInfoContainer}>
          <UserAvatar style={styles.userAvatar} />
        </View>
        <View style={styles.userNameContainer}>
          <UserName style={styles.userName} />
        </View>
        <View style={styles.logOutBtn}>
          <LogOutBtn />
        </View>
        <ScrollView>
          <Post />
        </ScrollView>
      </View>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    marginTop: 230,
    paddingTop: 92,
  },
  logOutBtn: { position: "absolute", right: 16, top: 22 },
  userName: {
    fontWeight: 500,
    fontSize: 30,
    marginBottom: 32,
  },
  userNameContainer: {
    alignItems: "center",
  },
  userInfoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ translateY: -100 }],
  },
});
