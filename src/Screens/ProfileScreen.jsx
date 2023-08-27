import {
    View,
    
    StyleSheet,
    TouchableOpacity,
   
  } from "react-native";
  import { AntDesign } from "@expo/vector-icons";
  import { useNavigation } from '@react-navigation/native';
  import { BackgroundImage } from "../Components/BackgroundImage";
  import backgroundSource from "../Images/background.jpg";
  import { LogOutIcon, PostsScreenIcon, CreatePostIcon,ProfileScreenIcon } from "../Components/Icons";
  
  export const ProfileScreen = () => {
   
    const navigation = useNavigation();
    const handleLogout = () => {
        navigation.navigate('LoginScreen')
      };
  

    return (
      <BackgroundImage imageSource={backgroundSource}>
     
        < View style={styles.container}>
          
        <View style={styles.userImageContainer}>
          <TouchableOpacity style={styles.imageAddButton}>
            <AntDesign
              name="pluscircleo"
              size={25}
              color="rgba(255, 108, 0, 1)"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logOutButton} onPress={handleLogout}>
          <LogOutIcon width={24} height={24} color="none" />
        </TouchableOpacity>

       <View style={styles.navMenu}>
        <TouchableOpacity onPress={() => navigation.navigate('PostsScreen')}>
          <PostsScreenIcon width={40} height={40} color="none" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.activeIcon} onPress={() => navigation.navigate("ProfileScreen")}>
          <ProfileScreenIcon width={40} height={40} color="white" fill = "#FF6C00" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("CreatePostsScreen")}>
          <CreatePostIcon width={40} height={40} fill="#212121" />
        </TouchableOpacity>
       
      </View>
    </View>
       
      
      </BackgroundImage>
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
    logOutButton: { position: "absolute", right: 16,
top:22 },
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
  