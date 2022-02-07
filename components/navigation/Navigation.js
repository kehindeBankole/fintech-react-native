import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../../screens/onboarding/Onboarding";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
export default function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Onboarding}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="one" component={HomeScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
