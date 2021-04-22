import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../styles/colors";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export function Header() {
  return (
    <View style={styles.container}>
      <Text> Olá, </Text>
      <Text>Marcio,</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
});
