import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export default function SendButton() {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#FF2E63",
        height: 60,
        width: 173,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 64,
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
  );
}

const styles = StyleSheet.create({});
