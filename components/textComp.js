import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TextComp = ({ children, style }) => {
  return <Text style={style}>{children}</Text>;
};

export default TextComp;
