import React from "react";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  text: { fontSize: 72 },
});
export const Count = (props: { count: number }) => (
  <Text style={styles.text}>{props.count}</Text>
);
