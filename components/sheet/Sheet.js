import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { formatCurrency } from "react-native-format-currency";
import SvgComponent from "../../assets/svg";

export default function Sheet({ button }) {
  const [amount, setAmount] = useState([]);
  function clear() {
    amount.pop();
    setAmount((prev) => [...amount]);
  }

  return (
    <>
      <Text
        style={{
          textAlign: "center",
          fontSize: 64,
          color: "#EEEEEE",
          fontFamily: "helveticanueheavy",
          marginTop: "10%",
        }}
      >
        {amount.length === 0
          ? "0.00"
          : formatCurrency({
              amount: Number([...amount].join("")),
              code: "USD",
            })[0]}
      </Text>
      <ScrollView
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: "10%",
          width: "100%",
          justifyContent: "center",
          paddingBottom: 100,
        }}
        showsVerticalScrollIndicator={false}
      >
        {[...button, <SvgComponent />].map((item, index) => (
          <TouchableOpacity
            style={{
              width: "33%",
              marginBottom: "15%",
              alignItems: "center",
            }}
            onPress={() => {
              //
              if (!isNaN(item)) {
                setAmount((prev) => [...prev, item]);
              } else {
                clear();
              }
            }}
            key={index}
          >
            <Text
              style={{
                fontSize: 24,
                color: "white",
                fontFamily: "helveticanuebold",
              }}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={{
            backgroundColor: "#FF2E63",
            height: 60,
            width: 173,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "helveticanuebold",
              fontSize: 16,
            }}
          >
            send money
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
