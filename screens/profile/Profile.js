import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import {
  formatCurrency,
  getSupportedCurrencies,
} from "react-native-format-currency";
import RBSheet from "react-native-raw-bottom-sheet";
import Sheet from "../../components/sheet/Sheet";

export default function Profile({ navigation }) {
  const refRBSheet = useRef();
  const [valueFormattedWithSymbol] = formatCurrency({
    amount: Number(200000),
    code: "USD",
  });
  const users = [
    {
      id: 1,
      name: "Adeboye Usman",
      image: require("../../assets/user1.png"),
      status: "received",
      amount: 200000,
    },
    {
      id: 2,
      name: "Mercy Popoola",
      image: require("../../assets/user2.png"),
      status: "failed",
      amount: 11000,
    },
    {
      id: 3,
      name: "Onome Adetayo",
      image: require("../../assets/user3.png"),
      status: "sent",
      amount: 150000,
    },
    {
      id: 4,
      name: "Kingsley Abiodun",
      image: require("../../assets/user4.png"),
      status: "received",
      amount: 20000,
    },
    {
      id: 5,
      name: "Adeboye Usman",
      image: require("../../assets/user1.png"),
      status: "received",
      amount: 2000,
    },
    {
      id: 6,
      name: "Adeboye Usman",
      image: require("../../assets/user1.png"),
      status: "failed",
      amount: 2000,
    },
    {
      id: 7,
      name: "Adeboye Usman",
      image: require("../../assets/user2.png"),
      status: "received",
      amount: 2000,
    },
    {
      id: 8,
      name: "Adeboye Usman",
      image: require("../../assets/user1.png"),
      status: "received",
      amount: 2000,
    },
    {
      id: 9,
      name: "Adeboye Usman",
      image: require("../../assets/user1.png"),
      status: "sent",
      amount: 2000,
    },
    {
      id: 10,
      name: "Lara George",
      image: require("../../assets/user2.png"),
      status: "received",
      amount: 2000000,
    },
  ];

  const button = [1, 2, 3, 4, 5, 6, 7, 8, 9, " ", 0];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity style={styles.button}>
            <View style={{ ...styles.line, width: "65%" }}></View>
            <View style={{ ...styles.line, width: "55%", marginTop: 5 }}></View>
          </TouchableOpacity>
          <Text style={styles.name}>Hello Sandra,</Text>
        </View>
        <TouchableOpacity style={styles.addmoneybutton}>
          <Text style={styles.addmoneytext}>Add money</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.balancemessage}>Your current balance is</Text>
        <Text style={styles.balancemain}>{valueFormattedWithSymbol}</Text>
        <View style={styles.actionbuttonsection}>
          <TouchableOpacity
            style={styles.actionbutton}
            onPress={() => navigation.navigate("request")}
          >
            <Text style={styles.actiontext}>Request money</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionbutton}
            onPress={() => refRBSheet.current.open()}
          >
            <Text style={styles.actiontext}>Send money</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.bar}></View>
        <View style={{ ...styles.header, marginTop: 24, marginBottom: 32 }}>
          <Text
            style={{ ...styles.balancemessage, fontSize: 16, color: "#FFFFFF" }}
          >
            All Transactions
          </Text>
        </View>
        <View contentContainerStyle={[styles.header, styles.useritem]}>
          <FlatList
            data={users}
            contentContainerStyle={{
              paddingBottom: 100,
            }}
            renderItem={({ item }) => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                  paddingHorizontal: 16,
                  height: 88,
                  backgroundColor: item.id % 2 !== 0 && "#192259",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Image source={item.image} />
                  <View style={{ marginLeft: 16 }}>
                    <Text style={styles.username}>{item.name}</Text>
                    <View
                      style={{
                        ...styles.status,
                        backgroundColor:
                          item.status == "failed"
                            ? "#FE4A54"
                            : item.status == "sent"
                            ? "#FAAD39"
                            : "#1DC7AC",
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: "white",
                          width: 20,
                          height: 20,
                          borderRadius: 100,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {item.status == "failed" && (
                          <Image source={require("../../assets/failed.png")} />
                        )}
                        {item.status == "sent" && (
                          <Image source={require("../../assets/sent.png")} />
                        )}
                        {item.status == "received" && (
                          <Image
                            source={require("../../assets/received.png")}
                          />
                        )}
                      </View>
                      <Text style={{ ...styles.balancemessage, marginLeft: 5 }}>
                        {item.status == "received" && "Received"}
                        {item.status == "sent" && "Sent"}
                        {item.status == "failed" && "Failed"}
                      </Text>
                    </View>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      ...styles.balancemain,
                      color:
                        item.status == "failed"
                          ? "#FE4A54"
                          : item.status == "sent"
                          ? "#FAAD39"
                          : "#1DC7AC",
                      fontSize: 16,
                    }}
                  >
                    {
                      formatCurrency({
                        amount: Number(item.amount),
                        code: "USD",
                      })[0]
                    }
                  </Text>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          container: {
            height: Dimensions.get("screen").height - 200,
            backgroundColor: "#10194E",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            zIndex: -9999,
            alignItems: "center",
            flexDirection: "column",
          },
          draggableIcon: {
            backgroundColor: "#FFFFFF",
          },
        }}
        animationType={"slide"}
      >
        <Sheet button={button} />
      </RBSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#010A43",
    paddingTop: StatusBar.currentHeight + 35,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  button: {
    height: 48,
    width: 48,
    backgroundColor: "#212A6B",
    borderRadius: 100,
    // alignItems: "center",
    justifyContent: "center",
  },
  line: {
    backgroundColor: "#FF2E63",
    height: 2,
    marginLeft: 10,
  },
  name: {
    alignSelf: "center",
    color: "white",
    fontSize: 20,
    fontFamily: "helveticanuebold",
    marginLeft: 16,
  },
  addmoneybutton: {
    backgroundColor: "#212A6B",
    height: 32,
    borderRadius: 8,
    // alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 90,
  },
  addmoneytext: {
    alignSelf: "center",
    color: "#426DDC",
    fontSize: 14,
    fontFamily: "helveticanuebold",
  },
  content: {
    marginTop: 48,
    paddingHorizontal: 16,
    marginBottom: 56,
  },
  balancemessage: {
    color: "#E7E4E4",
    fontFamily: "helveticanuemedium",
    fontSize: 12,
  },
  balancemain: {
    color: "#EEEEEE",
    fontFamily: "helveticanueheavy",
    fontSize: 40,
    marginTop: 16,
  },
  actionbuttonsection: {
    flexDirection: "row",
    marginTop: 32,
    justifyContent: "space-between",
  },
  actionbutton: {
    width: "48%",
    borderRadius: 10,
    borderColor: "#464E8A",
    borderWidth: 1,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  actiontext: {
    color: "#464E8A",
    fontSize: 16,
    fontFamily: "helveticanuebold",
  },
  body: {
    backgroundColor: "#10194E",
    // height: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    flex: 1,
    paddingTop: 16,
  },
  bar: {
    backgroundColor: "#4E589F",
    width: 64,
    height: 7,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  useritem: {
    marginTop: 32,
    width: "100%",
    flexDirection: "column",
  },
  username: {
    fontFamily: "helveticanueheavy",
    color: "#858EC5",
    fontSize: 16,
  },
  status: {
    width: 87,
    height: 30,
    backgroundColor: "#1DC7AC",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
    flexDirection: "row",
  },
});
