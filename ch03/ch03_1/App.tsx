import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={[styles.safeAreaView, { backgroundColor: "gray" }]}>
      <Text style={[styles.text, { color: 'white' }]}>
        Hello StyleSheet world!
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 20 },
});
