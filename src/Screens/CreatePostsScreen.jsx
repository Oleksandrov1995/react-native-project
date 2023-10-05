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
import React, { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { postData } from "../data/post.js";
import * as Animatable from "react-native-animatable";
import { ActivityIndicator } from "react-native";
import * as Location from "expo-location";

export const CreatePostsScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photoUri, setPhotoUri] = useState(null);
  const [postTitle, setPostTitle] = useState("");
  const [postLocation, setPostLocation] = useState("");
  const [location, setLocation] = useState(null);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [isTakingPicture, setIsTakingPicture] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocation(coords);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    setIsButtonActive(
      postTitle.trim().length > 0 &&
        postLocation.trim().length > 0 &&
        photoUri !== null
    );
  }, [postTitle, postLocation, photoUri]);

  const takePicture = async () => {
    setIsTakingPicture(true);
    if (cameraRef) {
      await cameraRef.resumePreview();
      const { uri } = await cameraRef.takePictureAsync();
      setPhotoUri(uri);
      setIsTakingPicture(false);
    }
  };

  const publicatePost = async () => {
    setLoading(true);
    if (location && location.latitude && location.longitude) {
      const newPost = {
        id: Math.random(),
        title: postTitle,
        comments: [],
        image: photoUri,
        locationСoords: `${location.latitude}, ${location.longitude}`,
        location: postLocation,
        likes: 0,
      };
      setPhotoUri(null);
      setPostTitle("");
      setPostLocation("");
      setLocation(null);
      postData.push(newPost);
      await navigation.navigate("PostsScreen");
    } else {
      alert("Location is null or invalid");
    }
    setLoading(false);
  };
  const deletePost = () => {
    setPhotoUri(null);
    setPostTitle("");
    setPostLocation("");
    setLocation(null);
  };

  const deleteFoto = () => {
    setPhotoUri(null);
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={-80}
      >
        <View style={styles.container}>
          <View style={styles.cameraContainer}>
            {photoUri ? (
              <Image source={{ uri: photoUri }} style={styles.previewImage} />
            ) : (
              <Camera style={styles.camera} type={type} ref={setCameraRef}>
                <View style={styles.photoView}>
                  <TouchableOpacity
                    onPress={takePicture}
                    disabled={isTakingPicture}
                  >
                    {isTakingPicture ? (
                      <ActivityIndicator size="large" color="orange" />
                    ) : (
                      <AddFotoIcon />
                    )}
                  </TouchableOpacity>
                </View>
              </Camera>
            )}
          </View>
          <View>
            {photoUri ? (
              <TouchableOpacity onPress={deleteFoto}>
                <Text style={styles.addFotoText}>Редагувати фото</Text>
              </TouchableOpacity>
            ) : (
              <Text style={styles.addFotoText}>Завантажити фото</Text>
            )}
          </View>
          <TextInput
            style={styles.inputName}
            placeholder="Назва..."
            placeholderTextColor="rgba(232, 232, 232, 1)"
            value={postTitle}
            onChangeText={setPostTitle}
          />
          <View style={styles.placeContainer}>
            <PlaceIcon style={styles.placeIcon} />
            <TextInput
              style={styles.inputPlace}
              placeholder="Місцевість..."
              placeholderTextColor="rgba(232, 232, 232, 1)"
              value={postLocation}
              onChangeText={setPostLocation}
            />
          </View>
          <Animatable.View
            animation="fadeIn"
            duration={500}
            style={
              isButtonActive
                ? styles.activePublicateButton
                : styles.publicateButton
            }
          >
            <TouchableOpacity
              onPress={publicatePost}
              disabled={!isButtonActive || loading}
            >
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text
                  style={
                    isButtonActive
                      ? styles.activeButtonText
                      : styles.publicateButtonText
                  }
                >
                  Опублікувати
                </Text>
              )}
            </TouchableOpacity>
          </Animatable.View>
          <View style={styles.navMenu}>
            <TouchableOpacity onPress={deletePost}>
              <DeletePostIcon width={40} height={40} color="none" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#FFFFFF",
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
  cameraContainer: {
    display: "flex",
    height: 240,
    borderWidth: 1,
    borderColor: "rgba(232, 232, 232, 1)",
    borderRadius: 8,
    overflow: "hidden",
  },
  camera: { flex: 1 },
  photoView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    marginBottom: 150,
  },
  activePublicateButton: {
    marginTop: 32,
    backgroundColor: "rgba(255, 108, 0, 1)",
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
  activeButtonText: {
    color: "white",
  },
  previewImage: {
    flex: 1,
    resizeMode: "cover",
  },

  navMenu: {
    marginTop: "auto",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 9,
    paddingRight: 81,
    paddingBottom: 22,
    paddingLeft: 81,
  },
});
