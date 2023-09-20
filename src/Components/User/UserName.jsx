import React from "react";
import {Text} from "react-native";
import users from "../../data/users.json";

export const UserName = ({ style }) => {
  const user = users[0];

  return <Text style={[style]} >{user.name}</Text>;
};
