import { StyleSheet } from "react-native";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CreatePostsScreen } from "../Screens/CreatePostsScreen";
import { ProfileScreen } from "../Screens/ProfileScreen";
import { PostsScreen } from "../Screens/PostsScreen.jsx";
import { BackBtn } from "../Components/BackBtn";
import { Ionicons } from "@expo/vector-icons";
import { LogOutBtn } from "../Components/LogOutBtn";
import { CommentsScreen } from "../Screens/CommentsScreen";
import { MapScreen } from "../Screens/MapScreen";

const BottomTab = createBottomTabNavigator();

export const BottomNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "PostsScreen") {
            iconName = "ios-grid-outline";
          } else if (route.name === "CreatePostsScreen") {
            iconName = "add";
          } else if (route.name === "ProfileScreen") {
            iconName = "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: "#FF6C00",
        tabBarInactiveTintColor: "#212121",
        tabBarItemStyle: styles.tabBarItemStyle,
        tabBarStyle: {
          ...styles.tabBarStyle,
          height:
            route.name === "CreatePostsScreen" ? 0 : styles.tabBarStyle.height,
        },
      })}
    >
      <BottomTab.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerStyle: {
            backgroundColor: "#rgba(255, 255, 255, 1)",
          },
          headerTintColor: "rgba(33, 33, 33, 1)",
          headerTitleStyle: {
            fontSize: 17,
            fontWeight: 500,
          },
          headerTitleAlign: "center",
          headerRight: () => (
            <View style={styles.logOutBtn}>
              <LogOutBtn />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        options={{
          title: "Коментарі",
          tabBarVisible: true,
          headerStyle: {
            backgroundColor: "#rgba(255, 255, 255, 1)",
          },
          headerTintColor: "rgba(33, 33, 33, 1)",
          headerTitleStyle: {
            fontSize: 17,
            fontWeight: 500,
          },
          headerTitleAlign: "center",
          headerLeft: () => <BackBtn />,
          tabBarButton: () => null,
        }}
      />
      <BottomTab.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          tabBarVisible: false,
          title: "Створити публікацію",
          headerStyle: {
            backgroundColor: "#rgba(255, 255, 255, 1)",
          },
          headerTintColor: "rgba(33, 33, 33, 1)",
          headerTitleStyle: {
            fontSize: 17,
            fontWeight: 500,
          },
          headerTitleAlign: "center",
          headerLeft: () => <BackBtn />,
        }}
      />
      <BottomTab.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          tabBarVisible: false,
          title: "Місце створення фотографії",
          headerStyle: {
            backgroundColor: "#rgba(255, 255, 255, 1)",
          },
          headerTintColor: "rgba(33, 33, 33, 1)",
          headerTitleStyle: {
            fontSize: 17,
            fontWeight: 500,
          },
          headerTitleAlign: "center",
          headerLeft: () => <BackBtn />,
          tabBarButton: () => null,
        }}
      />
      <BottomTab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </BottomTab.Navigator>
  );
};
const styles = StyleSheet.create({
  tabBarItemStyle: {
    borderRadius: 20,
    width: 40,
    height: 40,
    marginHorizontal: 9,
    alignItems: "center",
  },
  tabBarStyle: {
    height: 83,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 17,
    paddingHorizontal: 82,
  },
  logOutBtn: { marginRight: 12 },
});
