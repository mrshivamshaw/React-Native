import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

export default function FlatenCards (){
  return (
    <View style={style.MainConatiner}>
      <Text style={style.heading}>Flat Cards</Text>
      <View style={style.conatiner}>
        <View style={style.cardOne}>
            <Text>
                Card 1
            </Text>
        </View>
        <View style={style.cardextra}>
            <Text>
                Card 2
            </Text>
        </View>
        <View style={style.cardTwo}>
            <Text>
                Card 3
            </Text>
        </View>
       
      </View>
    </View>
  )
}

const style = StyleSheet.create({
    heading:{
        fontSize:23,
        fontWeight:"bold",
    },
    MainConatiner : {
        display:"flex",
        flexDirection:"column",
        width:'auto',
        height:'auto',
        gap:10,
        paddingVertical:8,
        marginHorizontal:8
    },
    conatiner : {
        display:"flex",
        flexDirection:"row",
        // justifyContent:"space-between",
        width:'auto',
        height:'auto',
        gap:10,
        overflow:"scroll"
    },
    cardOne:{
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        backgroundColor:"#FF2592",
        borderRadius:10
    } ,
    cardTwo:{
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        backgroundColor:"#5DFF25",
        borderRadius:10
    } ,
    cardThree:{
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        backgroundColor:"#FFD425",
        borderRadius:10
    } ,
    cardFour:{
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        backgroundColor:"#FF2592",
        borderRadius:10
    } ,
    cardextra:{
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        backgroundColor:"#25FF95",
        borderRadius:10
    }

})