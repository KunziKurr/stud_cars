import React, {Component} from 'react';
import { SafeAreaView, ScrollView, StatusBar,StyleSheet,Text, useColorScheme,View,Image,} from 'react-native';
import Svg, {Circle, Ellipse, G, TSpan, TextPath, Path, Polygon, Polyline, Line, Rect, Use, Symbol, Defs, LinearGradient, RadialGradient, Stop, ClipPath, Pattern,  Mask} from 'react-native-svg';
import Homeheader from './topHeader';


export default class Home extends Component {
    render() {
      return (
        (
          
              <View>
                <Homeheader />
              </View>
        
         
     )  
      );
    }
  }
  
  const styles = StyleSheet.create({
   blob:{
     position:"absolute"
   },
  studText:{
    color: '#fff',
    textAlign:"center",
  alignItems:"center",
  justifyContent:"center",
  fontSize:20,
  textTransform:"uppercase",
  fontFamily:"BlackRocker-ZVOpB"
  },
  tinyLogo:{
    position:'absolute',
    width: 100,
    height: 30,    
    top:-50,
    flex:1,
    justifyContent:"center"
  },
  });
  