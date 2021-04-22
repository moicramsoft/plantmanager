import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../styles/colors";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import fonts from "../styles/fonts";

export function Header() {
  // let userImg = '../assets/Marcio.jpg';
  let userImg = "../assets/Marcio.jpg";

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}> Olá,</Text>
      <Text style={styles.userName}>Marcio</Text>

      <Image source={require(userImg)} style={styles.image} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  image: {
    width: 70,
    height: 80,
    borderRadius: 70,
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  userName: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 40,
  },
});
