import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
ScreenOrientation.unlockAsync()
import Slider from '@react-native-community/slider'


export default function App() {
  return (
    
    <View style={styles.container}>
    <Slider style={{width:200, height:40, transform: [ { rotate: "-90deg" } ], alignSelf:'flex-start'}} minimumValue={-10} maximumValue={10}/>
    
      <Text>Open up App.js to start working on your app!</Text>
    
      <StatusBar style="auto" />
    </View>
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
