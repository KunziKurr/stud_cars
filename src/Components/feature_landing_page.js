import React, {Component} from 'react';
import { SafeAreaView, ScrollView, StatusBar,StyleSheet,Text, useColorScheme,View,Image,} from 'react-native';
import Svg, {Circle, Ellipse, G, TSpan, TextPath, Path, Polygon, Polyline, Line, Rect, Use, Symbol, Defs, LinearGradient, RadialGradient, Stop, ClipPath, Pattern,  Mask} from 'react-native-svg';



export default class Landing extends Component {
    render() {
      return (
        (
          
              <View style={styles.Landing}>
                 <Image
        style={styles.tinyLogo}
        source={require('../Assets/Images/stud_logo.png')}
      />
          <Text style={styles.studText}>
          Stud Cars 
          </Text>
         
{/*           
          <Svg width="400" height="700" viewBox="0 10 350 850" style={styles.blob}>
              <G transform="translate(0 , 5)">
                <Path
                d="m -84.310252,-49.163857 c 128.653668,-0.07171 312.407422,1.668075 511.396782,1.850931 0.80673,130.660648 6.83349,-131.431154 3.05608,149.933876 C 333.3485,442.27337 17.221045,-118.07184 -68.773282,202.7469 -88.967843,278.08668 -84.310252,-49.163857 -84.310252,-49.163857 Z"
                fill="#077ADEE6" />
              </G>
            </Svg> */}
          
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
  