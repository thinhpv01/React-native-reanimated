import React from "react";
import { StyleSheet } from "react-native";
import PerspectiveMenu from "./screen/PerspectiveMenu";

export default function App() {
  return <PerspectiveMenu />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
