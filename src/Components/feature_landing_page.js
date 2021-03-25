import React, {Component} from 'react';
import { SafeAreaView, ScrollView, StatusBar,StyleSheet,Text, useColorScheme,View,} from 'react-native';



export default class Landing extends Component {
    render() {
      return (
        (
      
              <View style={styles.Landing}>
          <Text style={styles.studText}>
          Stud Carz
          </Text>
        </View>
         
     )  
      );
    }
  }
  
  const styles = StyleSheet.create({
   
  studText:{
    color: '#fff',
    textAlign:"center",
  alignItems:"center",
  justifyContent:"center",
  fontSize:20,
  textTransform:"uppercase",
  fontFamily:"NOVA"
  },
  });
  