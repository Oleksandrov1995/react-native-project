import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
export const CommentsScreen = ({ route }) => {
  const { comments, image} = route.params;
 
  const [newCommentText, setNewCommentText] = useState("");

  const addComment = () => {
    comments.push(newCommentText)
    setNewCommentText("")
 
  };
  
 
  return (
    <View style={styles.container}>
      
       <Image style={styles.image} source={{ uri: image }} />
      
      <FlatList
     style={styles.commentsContainer}
        data={comments}
        renderItem={({ item }) => <Text style={styles.commentsText}>{item}</Text>}
      />
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newCommentText}
          onChangeText={setNewCommentText}
          placeholder="Коментувати..."
          placeholderTextColor="rgba(189, 189, 189, 1)"
        />
        <TouchableOpacity style={styles.button} onPress={addComment}>
          <AntDesign name="arrowup" size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 8,
  },
  commentsContainer:{
    marginTop: 32
  },
  commentsText:{
    backgroundColor:"rgba(232, 232, 232, 1)",
    marginBottom: 24,
    borderRadius: 10,
    padding: 10
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 'auto',
    paddingTop:16,
  },
  input: {
    
    flex: 1,
    height: 50,
    borderColor: "gray",
    backgroundColor: "rgba(232, 232, 232, 1)",
    borderRadius: 25,
    borderWidth: 1,
    paddingHorizontal: 16,
  },
  button: {
    position: "absolute",
    right: 10,
    top:24,
    backgroundColor: "rgba(255, 108, 0, 1)",
    borderRadius: 25,
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
  },
});