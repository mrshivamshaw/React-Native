import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const ElevatedCard = () => {
  return (
    <View style={style.MainConatiner}>
      <Text style={style.heading}>Elevated Cards</Text>
      <ScrollView horizontal={true} contentContainerStyle={style.conatiner}>
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
        <View style={style.cardThree}>
            <Text>
                Card 4
            </Text>
        </View>
        <View style={style.cardFour}>
            <Text>
                Card 5
            </Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default ElevatedCard

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
        width:'auto',
        height:'auto',
        gap:10,
        // overflow:"scroll"
    },
    cardOne:{
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        backgroundColor:"#FF2592",
        borderRadius:10,
        elevation:8
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