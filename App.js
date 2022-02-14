import { StyleSheet, Text, View, StatusBar } from "react-native";
import Onboarding from "./screens/onboarding/Onboarding";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./components/navigation/Navigation";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

export default function App() {
  let [fontsLoaded] = useFonts({
    stolzbold: require("./assets/font/Stolzl-Bold.ttf"),
    helveticanuemedium: require("./assets/font/HelveticaNeueCyr-Light.otf"),
    helveticanuebold: require("./assets/font/HelveticaNeueCyr-Bold.otf"),
    helveticanueheavy: require("./assets/font/HelveticaNeueCyr-Heavy.otf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Navigation />
        {/* <Onboarding /> */}
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
