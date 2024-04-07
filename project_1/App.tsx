import React from "react";
import { SafeAreaView,Text,View ,Button} from "react-native";

function App(){
  const [value,setValue] = React.useState(0)
  return (
  <SafeAreaView style={{display:'flex',flexDirection:'column',width:'100%',height:'100%'}}>
    <View style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'center',width:'100%',height:'100%',backgroundColor:'lightblue'}}>
      <Text style={{fontSize:30,borderBottomColor:'deepskyblue',borderBottomWidth:3 , marginBottom:20}}>Counter App</Text>
      <View style={{width:'80%'}}>
        <Button title="+" onPress={()=>{setValue(value+1)}}/>
      </View>
      <Text style={{width:100,fontSize:30,textAlign:"center"}}>{value}</Text>
      <View style={{width:'80%'}}>
        <Button title="-" onPress={()=>{setValue(value-1)}}/>
      </View>
    </View>
  </SafeAreaView>)
}

export default App