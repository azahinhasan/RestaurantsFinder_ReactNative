import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet,ScrollView, FlatList,Image } from 'react-native';
import yelp from '../api/yelp';

const SearchScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const [data,setData]= useState(null);
    
    const getData= async id=>{
        const response = await yelp.get(`/${id}`);
        setData(response.data);
        console.log(response.data.name);
    };

    useEffect(()=>{
        getData(id);
    },[]);

    if(!data){
        return null;
    }

    return (
        <View style={styles.detailsText}>
                <Text style={styles.name}>Restaurants Name :  {data.name}</Text>
                <Text>Location : {data.location.address1},{data.location.city},{data.location.country}</Text>
                <Text>Phone : {data.display_phone}</Text>
                <Text>Rating : {data.rating}</Text>
        
            <Text>Images </Text>
            <FlatList
                data={data.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return <Image style={styles.image} source={{ uri: item}}/>
                }}
            />
        </View>
  );
};

const styles = StyleSheet.create({
    image:{
        height: 150,
        marginBottom:10,
        borderRadius:5
    },
    name:{
        fontSize:15,
        fontWeight:'bold',
        marginBottom:10
    },
    detailsText:{
        margin:10,
        flex:1
    }
});

export default SearchScreen;