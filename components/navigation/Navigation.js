import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../../screens/onboarding/Onboarding";
import Profile from "../../screens/profile/Profile";
import Request from "../../screens/request/Request";
import Back from "../../assets/svg/Back";

const Stack = createNativeStackNavigator();
export default function Navigation({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Onboarding}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="request"
        component={Request}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
