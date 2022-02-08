import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import {
  formatCurrency,
  getSupportedCurrencies,
} from "react-native-format-currency";

export default function Profile() {
  const [valueFormattedWithSymbol, valueFormattedWithoutSymbol, symbol] =
    formatCurrency({ amount: Number(200000), code: "USD" });
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
          <TouchableOpacity style={styles.actionbutton}>
            <Text style={styles.actiontext}>Request money</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionbutton}>
            <Text style={styles.actiontext}>Send money</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E164D",
    paddingTop: StatusBar.currentHeight + 35,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    width: 164,
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
});
