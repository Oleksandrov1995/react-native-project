import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { DeletePostIcon, AddFotoIcon, PlaceIcon } from "../Components/Icons";
import { useNavigation } from "@react-navigation/native";

export const CreatePostsScreen = () => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          keyboardVerticalOffset={-100}
        >
          <View style={[styles.imageContainer, { width: "100%" }]}>
            <Image></Image>
            <TouchableOpacity>
              <AddFotoIcon />
            </TouchableOpacity>
          </View>
          <Text style={styles.addFotoText}>Завантажте фото</Text>
          <TextInput
            style={styles.inputName}
            placeholder="Назва..."
            placeholderTextColor="rgba(232, 232, 232, 1)"
          />
          <View style={styles.placeContainer}>
            <PlaceIcon style={styles.placeIcon} />
            <TextInput
              style={styles.inputPlace}
              placeholder="Місцевість..."
              placeholderTextColor="rgba(232, 232, 232, 1)"
            />
          </View>
          <TouchableOpacity style={styles.publicateButton}>
            <Text style={styles.publicateButtonText}>Опубліковати</Text>
          </TouchableOpacity>
          <View style={styles.navMenu}>
            {
              //не можу зробити щоб navMenu не підіймалось разом з клавіатурою
            }

            <TouchableOpacity
              onPress={() => navigation.navigate("PostsScreen")}
            >
              <DeletePostIcon width={40} height={40} color="none" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 240,
    borderWidth: 1,
    borderColor: "rgba(232, 232, 232, 1)",
    borderRadius: 8,
    backgroundColor: "rgba(232, 232, 232, 1)",
  },
  addFotoText: {
    marginTop: 8,
    fontSize: 16,
    color: "rgba(189, 189, 189, 1)",
  },
  inputName: {
    marginTop: 32,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(232, 232, 232, 1)",
  },
  placeContainer: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(232, 232, 232, 1)",
  },
  placeIcon: {
    marginRight: 8,
  },
  inputPlace: {
    flex: 1,
  },

  publicateButton: {
    marginTop: 32,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal: 111,
    alignItems: "center",
  },
  publicateButtonText: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 16,
    fontWeight: "bold",
  },

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
});
