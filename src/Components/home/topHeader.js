import React, {Component} from 'react';
import { SafeAreaView, ScrollView,Dimensions, StatusBar,StyleSheet,Text, useColorScheme,View,Image,} from 'react-native';
import Svg, {Circle, Ellipse, G, TSpan, TextPath, Path, Polygon, Polyline, Line, Rect, Use, Symbol, Defs, LinearGradient, RadialGradient, Stop, ClipPath, Pattern,  Mask} from 'react-native-svg';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
const width_proportion = '95%';
export default class Homeheader extends Component {
    render() {
      return (
        (
        <View style={styles.bodyContainer}>
            <View style={styles.StudContainer}>
                <Text style={styles.StudContainerName}>Stud Cards</Text>
                <Text style={styles.StudContainerNameSub1}>Stud Cards</Text>
                <Text style={styles.StudContainerNameSub2}>Stud Cards</Text>
            </View>
            {/* END OF STUD CONTAINER */}
             <View style={styles.parentListContainer}>
            
                <View style={styles.listContainer}>
                <ScrollView>
                            <View style={styles.listContainerElement}>
                            <Image
                                style={styles.tinyLogo}
                                source={require('../../Assets/Images/stud_logo.png')}/>
                            <Text style={styles.listHeading}>Car Name</Text>
                            <Text style={styles.listBriefContent}> Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever 
                            since the 1500s, </Text>

                            </View>
                            <View style={styles.listContainerElement}>
                            <Image
                                style={styles.tinyLogo}
                                source={require('../../Assets/Images/stud_logo.png')}/>
                            <Text style={styles.listHeading}>Car Name</Text>
                            <Text style={styles.listBriefContent}> Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever 
                            since the 1500s, </Text>

                            </View>
                            <View style={styles.listContainerElement}>
                            <Image
                                style={styles.tinyLogo}
                                source={require('../../Assets/Images/stud_logo.png')}/>
                            <Text style={styles.listHeading}>Car Name</Text>
                            <Text style={styles.listBriefContent}> Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever 
                            since the 1500s, </Text>

                            </View>
                            <View style={styles.listContainerElement}>
                            <Image
                                style={styles.tinyLogo}
                                source={require('../../Assets/Images/stud_logo.png')}/>
                            <Text style={styles.listHeading}>Car Name</Text>
                            <Text style={styles.listBriefContent}> Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever 
                            since the 1500s, </Text>

                            </View>
                            <View style={styles.listContainerElement}>
                            <Image
                                style={styles.tinyLogo}
                                source={require('../../Assets/Images/stud_logo.png')}/>
                            <Text style={styles.listHeading}>Car Name</Text>
                            <Text style={styles.listBriefContent}> Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever 
                            since the 1500s, </Text>

                            </View>
                            <View style={styles.listContainerElement}>
                            <Image
                                style={styles.tinyLogo}
                                source={require('../../Assets/Images/stud_logo.png')}/>
                            <Text style={styles.listHeading}>Car Name</Text>
                            <Text style={styles.listBriefContent}> Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever 
                            since the 1500s, </Text>

                            </View>
                            </ScrollView>
                </View>
               
            </View>          
        </View> 
         
     )  
      );
    }
  }
  
  const styles = StyleSheet.create({
    bodyContainer:{
         flex:0,
backgroundColor: '#273a40',
    },
    StudContainer:{
        height:300,
    },
    StudContainerName:{
        color:'#fff'
    },
    StudContainerNameSub1:{
        color:'#fff'
    },
    StudContainerNameSub2:{
        color:'#fff'
    },
    parentListContainer:{
        position:'relative',
        margin:'auto'
    },
    listContainer:{
        width:width_proportion,
        position:'absolute',
        left:15,
        right:0,
        justifyContent: 'center', 
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius:30,
        flexDirection:'column'
        
    },
    listContainerElement:{
        marginTop:2,
        marginBottom:20,
        borderRadius:20,
        backgroundColor:'#324b53',
        height:200,
        padding:20,
        alignItems:'center'
    },
    tinyLogo:{
        height:0,
        width:100,
        position:'absolute',
        left:10,
        display:'none'
    },
    listHeading:{
        color:'#b6b6b6'
    },
    listBriefContent:{
        color:'#b6b6b6'
    }
    
  });
  
  