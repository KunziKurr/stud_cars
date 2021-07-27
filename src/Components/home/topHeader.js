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
                <Text style={styles.StudContainerNameSub1}>Be in the know</Text>
                <Text style={styles.StudContainerNameSub2}>Middle Range</Text>
            </View>
            {/* END OF STUD CONTAINER */}
             <View style={styles.parentListContainer}>
            
                
                <SafeAreaView>
                <ScrollView contentContainerStyle={{ flexGrow: 1, flex:1 }}>



                            <View style={styles.listContainerElement}>
                                <Image
                                    style={styles.tinyLogo}
                                    source={require('../../Assets/Images/stud_cars1.png')}/>
                                <Text style={styles.listContainer}>Car Name</Text>
                            <Text style={styles.listBriefContent}> Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever 
                            since the 1500s, </Text>

                            </View>

                            <View style={styles.listContainerElement}>
                                <Image
                                    style={styles.tinyLogo}
                                    source={require('../../Assets/Images/stud_cars1.png')}/>
                                <Text style={styles.listContainer}>Car Name</Text>
                                <Text style={styles.listBriefContent}> Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever 
                                since the 1500s, </Text> 

                            </View>
                               <View style={styles.listContainerElement}>
                                <Image
                                    style={styles.tinyLogo}
                                    source={require('../../Assets/Images/stud_cars1.png')}/>
                                <Text style={styles.listContainer}>Car Name</Text>
                                <Text style={styles.listBriefContent}> Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever 
                                since the 1500s, </Text> 

                            </View>
                               <View style={styles.listContainerElement}>
                                <Image
                                    style={styles.tinyLogo}
                                    source={require('../../Assets/Images/stud_cars1.png')}/>
                                <Text style={styles.listContainer}>Car Name</Text>
                                <Text style={styles.listBriefContent}> Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever 
                                since the 1500s, </Text> 

                            </View>
                               <View style={styles.listContainerElement}>
                                <Image
                                    style={styles.tinyLogo}
                                    source={require('../../Assets/Images/stud_cars1.png')}/>
                                <Text style={styles.listContainer}>Car Name</Text>
                                <Text style={styles.listBriefContent}> Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever 
                                since the 1500s, </Text> 

                            </View>
                               <View style={styles.listContainerElement}>
                                <Image
                                    style={styles.tinyLogo}
                                    source={require('../../Assets/Images/stud_cars1.png')}/>
                                <Text style={styles.listContainer}>Car Name</Text>
                                <Text style={styles.listBriefContent}> Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever 
                                since the 1500s, </Text> 

                            </View>
                               <View style={styles.listContainerElement}>
                                <Image
                                    style={styles.tinyLogo}
                                    source={require('../../Assets/Images/stud_cars1.png')}/>
                                <Text style={styles.listContainer}>Car Name</Text>
                                <Text style={styles.listBriefContent}> Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever 
                                since the 1500s, </Text> 

                            </View>

                            
                            </ScrollView>
                            </SafeAreaView>
            
               
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
        fontSize:75,
        fontFamily:"NOVABOLD",
        paddingLeft:30,
        marginTop:10
    },
    StudContainerNameSub1:{
        color:'#fff',
        fontSize:30,
        paddingLeft:30,
        marginTop:5,
        fontFamily:'NOVABOLD'
    },
    StudContainerNameSub2:{
        color:'#fff',
        fontSize:20,
        paddingLeft:30,
        marginTop:10,
        fontFamily:'Raphtalia'
    },
    parentListContainer:{
        position:'relative',
        margin:'auto',
        height:20,
        overflow:'scroll',
        // backgroundColor:'blue'
    },
    listContainer:{
        position:'absolute',
        left:68,
        right:0,
        top:15, 
        justifyContent: 'center', 
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius:30,
        flexDirection:'column', 
        color:'#fff'
    },
    listContainerElement:{
        marginTop:2,
        marginBottom:20,
        marginLeft:25,
        marginRight:20,
        borderRadius:20,
         backgroundColor:'#161616',
        height:150,
        // backgroundColor:'#fff',
        position:'relative',
        // padding:20,
        alignItems:'center',
        elevation:3,
        shadowColor:'#ddd',
        flexDirection:'row',
        width:'90%'
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
        position:'relative',
        top:-45,
        fontSize:25,
        left:90,
        fontFamily:"NOVABOLD"
    },  
     listBriefContent:{
        color:'#b6b6b6',
        // marginLeft:10,
        justifyContent:'center',
        fontFamily:'jumpie',
        lineHeight:22,
        // paddingRight:90,
        position:'absolute',
        left:68,
        maxWidth: width_proportion,
        minWidth: width_proportion,
        width:width_proportion

     }
    
  });
  
  