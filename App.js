import React from "react";
import { StyleSheet } from "react-native";
import Lab1 from "./screen/Lab1";

export default function App() {
  return <Lab1 />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
