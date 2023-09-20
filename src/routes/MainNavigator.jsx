import { createStackNavigator } from "@react-navigation/stack";
import {RegistrationScreen} from "../Screens/RegistrationScreen"
import {LoginScreen} from '../Screens/LoginScreen'
import { NavigationContainer } from "@react-navigation/native";
import { BottomNavigator } from "./BottomNavіgator"; 
const MainStack = createStackNavigator();

export const MainNavigator = () => {
  return (
  <NavigationContainer>
    <MainStack.Navigator>
      <MainStack.Screen
        name="RegistrationScreen"
        component={RegistrationScreen}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
       <MainStack.Screen
          name="BottomNavigator"
          component={BottomNavigator}
          options={{ headerShown: false }}
        />
     
    </MainStack.Navigator>
    </NavigationContainer>
  
  );
};
