import React from "react";
import { StyleSheet } from "react-native";
import SwipeToDelete from "./screen/SwipeToDelete";

export default function App() {
  return <SwipeToDelete />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
