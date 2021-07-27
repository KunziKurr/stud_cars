
import React, { Component } from 'react';

import { SafeAreaView, ScrollView, StatusBar,StyleSheet,Text, useColorScheme,View,} from 'react-native';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import Landing from './src/Components/feature_landing_page';
import Home from './src/Components/home/home';


 export default class App extends Component{
   render(){
    return(
      
      <View style={styles.wrapper}>
        <StatusBar
        animated={true}
        backgroundColor="#0e0d0f"
        />

      <Home />
      </View>
    )
    }
 }
 const styles = StyleSheet.create({
  wrapper:{
    flex:1,
backgroundColor: '#070105',
// justifyContent:'center',
// 	    alignItems:'center',
},
Landing: {
  //   backgroundColor: '#0A5EA8',
  // flex: 2,
  // position: 'relative',
},
 });