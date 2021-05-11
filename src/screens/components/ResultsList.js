import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet,FlatList,ScrollView,TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultDetail';
import {withNavigation} from 'react-navigation'; 

const ResultsList = (props) => {


    if(!props.result.length){
        return null;
    }

    return (
    <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        {/* <Text>Result:{props.result.length}</Text> */}
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={props.result}
            keyExtractor={(result) => props.result.id}
            renderItem={({item}) =>{
                return (
                    <TouchableOpacity onPress={()=>props.navigation.navigate('Result' ,{id : item.id})}>
                        {/* props.navigation.navigate(sceenName , value that want to pass) */}
                        {/* For props.navigation have to import 'withNavigation' */}
                        <ResultsDetail result={item}/>
                    </TouchableOpacity>
                )

            }}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5
    },
    container:{
        marginBottom:15,
        borderBottomColor:'#F0EADE',
        paddingBottom:10,
        borderBottomWidth:3,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        
        // elevation: 5,
        
    }
});

export default withNavigation(ResultsList);