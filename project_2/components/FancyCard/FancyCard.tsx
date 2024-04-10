import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View style={style.main}>
        <Text style={style.heading}>Trending Places</Text>
        <View style={style.MainConatiner}>
            <Image style={style.imageCard} source={{uri:"https://thumbs.dreamstime.com/z/hawa-mahal-palace-jaipur-winds-rajasthan-50517641.jpg"}}/>
            <View style={style.textCard}>
                <View>
                    <Text style={style.placeHeading}>Hawa Mahal</Text>
                    <Text style ={style.location}>Pink city, Jaipur</Text>
                </View>
                <Text>
                    The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers.
                </Text>
                <Text>
                    12mins away
                </Text>
            </View>
        </View>
    </View>
  )
}

export default FancyCard

const style = StyleSheet.create({
    heading:{
        fontSize:23,
        fontWeight:"bold",
        marginLeft:8
    },
    MainConatiner : {
        display:"flex",
        flexDirection:"column",
        width:'auto',
        height:'auto',
        gap:10,
        marginHorizontal:8,
        backgroundColor: '#FFFFFF',
        borderRadius:10,
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    imageCard:{
        height:180,
        width:'100%',
        borderRadius:10
    },
    main:{
        marginVertical:10,
    },
    card:{
        display:"flex",
        flexDirection:"column",
        width:'auto',
        height:'auto',
        gap:10
    },
    placeHeading:{
        fontWeight:"bold",
        fontSize:18
    },
    textCard:{
        display:'flex',
        flexDirection:'column',
        gap:10,
        marginLeft:12,
        paddingBottom:10
    },
    location:{
        color:"grey",
        fontSize:10
    }
})