import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import {
  formatCurrency,
  getSupportedCurrencies,
} from "react-native-format-currency";
import Back from "../../assets/svg/Back";
import SendButton from "../../components/SendButton/SendButton";

export default function Request({ navigation }) {
  const [valueFormattedWithSymbol] = formatCurrency({
    amount: Number(200000),
    code: "USD",
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: StatusBar.currentHeight + 15,
          paddingBottom: 80,
        }}
        //    showsHorizontalScrollIndicator={false}
        // showsVerticalScrollIndicator={false}
      >
        <Image
          source={require("../../assets/topbg.png")}
          style={{
            position: "absolute",
            width: Dimensions.get("window").width,
          }}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Back />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: "helveticanuemedium",
              color: "#D7C9C9",
              fontSize: 18,
              alignContent: "center",
            }}
          >
            New Request
          </Text>
          <View></View>
          <View></View>
        </View>
        <View
          style={{
            borderRadius: 150,
            backgroundColor: "#10194E",
            width: 250,
            height: 250,
            alignSelf: "center",
            marginTop: "30%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              borderRadius: 100,
              backgroundColor: "#192259",
              width: 200,
              height: 200,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../../assets/user.png")}
              style={{ width: 150, height: 150 }}
            />
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text
            style={{
              fontSize: 24,
              color: "#EEEEEE",
              fontFamily: "helveticanuebold",
            }}
          >
            Adeleke Ramon
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#EEEEEE",
              fontFamily: "helveticanuemedium",
              marginTop: 24,
            }}
          >
            is requesting for:
          </Text>
          <Text style={styles.balancemain}>{valueFormattedWithSymbol}</Text>
          <SendButton />
          <TouchableOpacity
            style={{
              backgroundColor: "transparent",
              height: 60,
              width: 173,
              borderColor: "#464E8A",
              borderWidth: 1,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 24,
            }}
          >
            <Text
              style={{
                color: "#464E8A",
                fontFamily: "helveticanuebold",
                fontSize: 16,
              }}
            >
              Don’t send
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#010A43",

    // paddingBottom: 100,
  },
  textContainer: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  balancemain: {
    color: "#EEEEEE",
    fontFamily: "helveticanueheavy",
    fontSize: 40,
    marginTop: 24,
  },
});
