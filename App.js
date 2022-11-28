import React from "react";
import { StyleSheet } from "react-native";
import RippleEffect from "./screen/RippleEffect";

export default function App() {
  return <RippleEffect />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
