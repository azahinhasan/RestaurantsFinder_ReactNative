import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SerachBar from '../screens/components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';


export default  ()=> {

    const [result,setResult]=useState([]);
    const [errorMsg, setErrorMsg]=useState('');

    const searchAPi =async(data)=>{
        // yelp.get('/search')
        //     .then({})
        console.log(data);
    try {
        const response = await yelp.get('/search',{
            params:{
                limit:50 ,//('/search?limit=50')
                term:data,
                location:'san jose'
            }
        });
        setResult(response.data.businesses);
        setErrorMsg('');
    }catch (err){
        console.log(err);
        setErrorMsg('Something Want Wrong');
    };
}

useEffect(()=>{
    SerachBar('pasta');
},[]);

return[searchAPi,errorMsg,result];

};


