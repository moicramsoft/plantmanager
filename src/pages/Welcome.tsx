import React from "react";
import {
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  View,
} from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/core';
export function Welcome() {
  const navigation =useNavigation();

  function handleStart(){
    navigation.navigate('UserIdentification');
  }
  let img = "../assets/watering.png";

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
      <Text style={styles.title}>
        Gerencie {"\n"} suas plantas de{"\n"} forma fácil
      </Text>
      <Image source={require(img)} 
      style={styles.image} />

      <Text style={styles.subtitle}>Não esqueça mais de regar suas plantas. Nós
      cuidamos de lembrar você sempre que preicsar.</Text>

      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
      
          <Feather 
          name="chevron-right"
          style={styles.buttonIcon}
          onPress={handleStart}
          />
      
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     },
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal:20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.heading,
    textAlign: "center",
    marginTop: 38,
    fontFamily:fonts.heading,
    lineHeight:34,
  },

  subtitle: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily:fonts.text,

  },
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
  },
  buttonIcon: {
    color: colors.white,
    fontSize: 32,
  },
  image: {
    height: Dimensions.get('window').width * 0.7
  },
});
