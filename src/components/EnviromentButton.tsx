import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
interface EnviromentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export function EnviromentButton({
  title,
  active = false,
  ...rest
}: EnviromentButtonProps) {
  return (
    <RectButton style={[styles.container,
    active && styles.containerActive]} {...rest}>
      <Text style={[styles.text,
       active && styles.textActive]
       }> {title}</Text>
    </RectButton>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    width: 76,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    marginRight:5,
  },
  containerActive: {
      backgroundColor: colors.green_light,
  },
  text: {
    fontSize: 16,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  textActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark,
     },
});
