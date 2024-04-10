import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import FlatenCards from './components/FlatenCards/FlatenCards'
import ElevatedCard from './components/ElevatedCard/ElevatedCard'
import FancyCard from './components/FancyCard/FancyCard'

const App = () => {
  return (
    <SafeAreaView style={style.wrapper}>
      <ScrollView >
        <FlatenCards/>
        <ElevatedCard/>
        <FancyCard/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

const style = StyleSheet.create({
  wrapper :{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height:'auto',
    overflow:"scroll"
  },
})