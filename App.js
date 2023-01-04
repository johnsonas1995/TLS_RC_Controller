import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
ScreenOrientation.unlockAsync()
import Slider from '@react-native-community/slider'
import { useState } from 'react';     
import logo from './assets/tls_logo.jpg';     
//Used RectTransform, PointerEventData, localEulerAngles for steering wheel?
//or probably just horizontal slider that transforms image of steering wheel with transform([{rotateX: '45deg'}

export default function App() {
  const [throttleVal, setThrottleVal] = useState(0);
  const [steerVal, setSteerVal] = useState(0);
  const [lights, setLights] = useState(false);

  const lightsHandler = () => {
    setLights(current => !current)
    console.log(lights)
  }

  return (
    <>
    <View style={styles.container}>
    <Image source={logo} style={{width:200, height:200, alignSelf:'center'}}/>
    
    <Text style={{alignSelf:'flex-start'}}>   Speed: {throttleVal}</Text>

    <Slider style={{width:200, height:40, transform: [ { rotate: "-90deg" } ], alignSelf:'flex-start'}} //could use wheel picker instead
      minimumValue={-10} 
      maximumValue={10}
      onValueChange={(value) => setThrottleVal(value)}
      step={1}
      value={throttleVal}
      />
    
      

      <Slider style={{width:200, height:40, alignSelf:'flex-end'}} //could use wheel picker instead
      minimumValue={-1} 
      maximumValue={1}
      onValueChange={(value) => setSteerVal(value)}
      step={1}
      value={steerVal}
      />

    <Text style={{alignSelf:'flex-end'}}>   Steering: {steerVal}   </Text>
    <Button
        style={{position:'absolute', bottom:0, left:0}}
        onPress={lightsHandler}
        title="Lights"
        color="#40E0D0"
        accessibilityLabel="Toggle Lights"
      />
    
      <StatusBar style="auto" />
    </View>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
