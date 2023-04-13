import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoadingIcon from "./icons/Loading";

export default function Loading() {
  return (
    <View style={styles.container}>
      <View style={styles.spiner}>
        <LoadingIcon color="blue" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.1)",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
  },
  spiner: {
    width: 50,
    height: 50,
  },
});
