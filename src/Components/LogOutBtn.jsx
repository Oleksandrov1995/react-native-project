import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const LogOutBtn = () => {
  const navigation = useNavigation();
  const logOut = () => {
    navigation.navigate("LoginScreen");
  };
  return (
    <TouchableOpacity onPress={logOut}>
      <MaterialIcons name="logout" size={24} color="#BDBDBD" />
    </TouchableOpacity>
  );
};

