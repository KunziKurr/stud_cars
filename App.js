
import React, { Component } from 'react';

import { SafeAreaView, ScrollView, StatusBar,StyleSheet,Text, useColorScheme,View,} from 'react-native';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import Landing from './src/Components/feature_landing_page';



 export default class App extends Component{
   render(){
    return(
      
      <View style={styles.wrapper}>
        <StatusBar
        animated={true}
        backgroundColor="#0e0d0f"
        />

      <Landing />
      </View>
    )
    }
 }
 const styles = StyleSheet.create({
  wrapper:{
    flex:1,
backgroundColor: '#0e0d0f',
justifyContent:'center',
	    alignItems:'center',
},
Landing: {
    backgroundColor: '#0A5EA8',
  flex: 2,
  position: 'relative',
},
 });