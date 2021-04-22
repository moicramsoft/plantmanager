import React,{useState} from "react";
import { Text, SafeAreaView, StyleSheet, View, TextInput,KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { Button } from "../components/Button";
import {useNavigation} from '@react-navigation/core';

export function UserIdentification() {
    const [isFocused, setFocused]=useState(false);
    const [isFilled, setIsFilled]=useState(false);
    const [name, setName]=useState<string>();

    function handleInputBlur(){
        setFocused(false);
        setIsFilled(!!name);

    }
    function handleInputFocus(){
        setFocused(true);
    }
    function handleInputChange(value:string){
        setIsFilled(!!value);
        setName(value);
    }

    const navigation =useNavigation();

    function handleSubmit(){
      navigation.navigate('Confirmation');
    }

  return (
    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS==='ios' ? 'padding': 'height'}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.content}>
        <View style={styles.form}>
        <View style={styles.header}>
          <Text style={styles.emoji}>{isFilled ? '😄' : '😀'}</Text>
          <Text style={styles.title}>
            Como podemos {"\n"}
            chamar você?
          </Text>
          </View>
          <TextInput 
          style={[styles.input,
        (isFocused ||  isFilled ) && 
        {borderColor:colors.green} ]}
          placeholder='Digite um nome'
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
          onChangeText={handleInputChange}

          />
          <View style={styles.footer} >
          <Button title="Confirmar"
          onPress={handleSubmit}/>
          </View>
        </View>
      </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    width: "100%",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 54,
    alignItems: "center",

  },
  emoji: {
    fontSize: 44,
  },
  header:{
    alignItems: "center",
  
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    textAlign: "center",
    width: '100%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text,
    lineHeight: 32,
    marginTop: 20,
  },
  footer: {
       marginTop: 40,
       width: "100%",
       paddingHorizontal: 20,

  },
});
