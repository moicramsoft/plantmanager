import React from 'react';
import {View, 
    Text,
    StyleSheet,
    FlatList,
} from 'react-native';
import colors from '../styles/colors';
import {Header} from '../components/Header';
import fonts from "../styles/fonts";
import { EnviromentButton } from '../components/EnviromentButton';

 export function PlantSelect (){
     return (
         <View style={styles.container}>
                      <View style={styles.header}>

             <Header />
             <Text style={styles.title}>Em qual Ambiente</Text>
             <Text style={styles.subtitle}>você quer colocar sua planta?</Text>

             </View>
             <View>
                 <FlatList 
                 data={[1,2,3,4,5]}
                     renderItem={({ item })=>(
             <EnviromentButton 
             title="Cozinha!" 
             active/>
                     )}
                     horizontal
                     showsHorizontalScrollIndicator={false}
                     contentContainerStyle={styles.enviromentList}
                     />

             </View>
             </View>

     )
 }
 const styles=StyleSheet.create({
     container:{
         flex:1,
         backgroundColor:colors.background
     },
     header:{
         paddingHorizontal: 30,
     },
     title: {
        fontSize: 17,
        color: colors.heading,
        fontFamily:fonts.heading,
        lineHeight:20,
        marginTop: 38,
            },
    
      subtitle: {
        fontFamily:fonts.heading,
        fontSize: 17,
        lineHeight:20,
        color: colors.heading,
      },
      enviromentList: {
          height: 40,
          justifyContent:'center',
          paddingBottom:5,
          marginLeft: 32,
          marginVertical:32,
      },
 })