import React from "react";
import { StyleSheet } from "react-native";
import Lab2 from "./screen/Lab2";

const SIZE = 90;
const CIRCLE_RADIUS = SIZE * 2;

export default function App() {
  return <Lab2 />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
