import React, {Component} from 'react';
import { SafeAreaView, ScrollView,Dimensions, StatusBar,StyleSheet,Text, useColorScheme,View,Image,} from 'react-native';
import Svg, {Circle, Ellipse, G, TSpan, TextPath, Path, Polygon, Polyline, Line, Rect, Use, Symbol, Defs, LinearGradient, RadialGradient, Stop, ClipPath, Pattern,  Mask} from 'react-native-svg';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
const width_proportion = '95%';
const width_proportion1 = '100%';
export default class Homeheader extends Component {
    render() {
      return (
        (
        <View style={styles.bodyContainer}>
            <View style={styles.StudContainer}>
                <Text style={styles.StudContainerName}>Stud Cars</Text>
                <Text style={styles.StudContainerNameSub1}>Stud Cars</Text>
                <Text style={styles.StudContainerNameSub2}>Stud Cars</Text>
            </View>
            {/* END OF STUD CONTAINER */}
             <View style={styles.parentListContainer}>
            
                <View style={styles.listContainer}>
                <SafeAreaView>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                            <View style={styles.listContainerElement}>
                            <Image
                                style={styles.tinyLogo}
                                source={require('../../Assets/Images/stud_cars1.png')}/>
                            <Text style={styles.listHeading}>Car Name</Text>
                            <Text style={styles.listBriefContent}> Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever 
                            since the 1500s, </Text>

                            </View>
                            <View style={styles.listContainerElement}>
                            <Image
                                style={styles.tinyLogo}
                                source={require('../../Assets/Images/stud_cars1.png')}/>
                            <Text style={styles.listHeading}>Car Name</Text>
                            <Text style={styles.listBriefContent}> Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever 
                            since the 1500s, </Text>

                            </View>
                            <View style={styles.listContainerElement}>
                            <Image
                                style={styles.tinyLogo}
                                source={require('../../Assets/Images/stud_cars1.png')}/>
                            <Text style={styles.listHeading}>Car Name</Text>
                            <Text style={styles.listBriefContent}> Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever 
                            since the 1500s, </Text>

                            </View>
                            <View style={styles.listContainerElement}>
                            <Image
                                style={styles.tinyLogo}
                               source={require('../../Assets/Images/stud_cars1.png')}/>
                            <Text style={styles.listHeading}>Car Name</Text>
                            <Text style={styles.listBriefContent}> Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever 
                            since the 1500s, </Text>

                            </View>
                            <View style={styles.listContainerElement}>
                            <Image
                                style={styles.tinyLogo}
                               source={require('../../Assets/Images/stud_cars1.png')}/>
                            <Text style={styles.listHeading}>Car Name</Text>
                            <Text style={styles.listBriefContent}> Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever 
                            since the 1500s, </Text>

                            </View>
                            <View style={styles.listContainerElement}>
                            <Image
                                style={styles.tinyLogo}
                               source={require('../../Assets/Images/stud_cars1.png')}/>
                            <Text style={styles.listHeading}>Car Name</Text>
                            <Text style={styles.listBriefContent}> Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever 
                            since the 1500s, </Text>

                            </View>
                            <View style={styles.listContainerElement}>
                            <Image
                                style={styles.tinyLogo}
                               source={require('../../Assets/Images/stud_cars1.png')}/>
                            <Text style={styles.listHeading}>Car Name</Text>
                            <Text style={styles.listBriefContent}> Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever 
                            since the 1500s, </Text>

                            </View>
                            <View style={styles.listContainerElement}>
                            <Image
                                style={styles.tinyLogo}
                               source={require('../../Assets/Images/stud_cars1.png')}/>
                            <Text style={styles.listHeading}>Car Name</Text>
                            <Text style={styles.listBriefContent}> Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever 
                            since the 1500s, </Text>

                            </View>
                            <View style={styles.listContainerElement}>
                            <Image
                                style={styles.tinyLogo}
                               source={require('../../Assets/Images/stud_cars1.png')}/>
                            <Text style={styles.listHeading}>Car Name</Text>
                            <Text style={styles.listBriefContent}> Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever 
                            since the 1500s, </Text>

                            </View>
                            </ScrollView>
                            </SafeAreaView>
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
        backgroundColor: '#1c1c1c',
    },
    StudContainer:{
        height:300,
    },
    StudContainerName:{
        color:'#fff',
        fontSize:70,
        fontFamily:"NOVABOLD",
        paddingLeft:30,
        marginTop:10
    },
    StudContainerNameSub1:{
        color:'#fff',
        fontSize:35,
        paddingLeft:30,
        marginTop:10,
        fontFamily:'NOVABOLD'
    },
    StudContainerNameSub2:{
        color:'#fff',
        fontSize:20,
        paddingLeft:30,
        marginTop:10,
        fontFamily:'NOVABOLD'
    },
    parentListContainer:{
        position:'relative',
        margin:'auto',
        flex:1
    },
    listContainer:{
        width:width_proportion,
        position:'absolute',
        left:12.5,
        right:0,
        justifyContent: 'center', 
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius:30,
        flexDirection:'column',
       
        
        
    },
    listContainerElement:{
        marginTop:2,
        marginBottom:20,
        borderRadius:20,
        backgroundColor:'#161616',
        height:150,
        position:'relative',
        padding:20,
        alignItems:'center',
        elevation:3,
        shadowColor:'#110011',
        flexDirection:'row',
        // width:450,
    },
    tinyLogo:{
        height:110,
        width:250,
        left:-119,
        position:'absolute',
        zIndex:-1,
    },
    listHeading:{
        color:'#b6b6b6',
        position:'absolute',
        top:15,
        fontSize:25,
        left:90,
        fontFamily:"NOVABOLD"
    },  
     listBriefContent:{
        color:'#b6b6b6',
        marginLeft:70,
        justifyContent:'center',
        fontFamily:'jumpie',
        lineHeight:22
    //     left:70,
    //     overflow:'hidden',
    //     paddingRight:20
     }
    
  });
  
  