import React from "react";
import { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { EvilIcons } from "@expo/vector-icons";
import posts from "../data/posts.json";
export const Post = () => {
  const [likes, setLikes] = useState({});
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            <Image style={styles.image} source={{ uri: item.image }} />
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.detailsContainer}>
                <Text style={styles.comments}>
                  <EvilIcons name="comment" size={24} color="black" />
                  {item.comments}
                </Text>

                <TouchableOpacity
                  onPress={() => {
                    setLikes((prevLikes) => ({
                      ...prevLikes,
                      [item.id]: (prevLikes[item.id] || 0) + 1,
                    }));
                  }}
                >
                  <Text style={styles.likes}>
                    <EvilIcons name="like" size={24} color="black" />
                    {likes[item.id] ? likes[item.id] : 0}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.location}>
                  <EvilIcons name="location" size={24} color="black" />
                  {item.location}
                </Text>
              </View>
            </View>
          </View>
        )}
        
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 50,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  likes: {
    marginLeft: 24,
  },
  location: {
    marginLeft: "auto",
    marginRight: 10,
  },
});

