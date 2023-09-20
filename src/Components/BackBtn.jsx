import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const BackBtn = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.navigate("PostsScreen");
  };
  return (
    <TouchableOpacity style={styles.back_btn} onPress={goBack}>
      <Feather name="arrow-left" size={24} color={`rgba(33, 33, 33, 0.8)`} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  back_btn: {
    marginLeft: 16,
  },
});