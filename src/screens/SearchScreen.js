import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import SerachBar from './components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../screens/components/ResultsList';

const SearchScreen = () => {

    const [term,setTerm]=useState('');
    const [searchAPi,errorMsg,result]=useResults();
    
    const filterResultsByPrice=(price)=>{
        return result.filter(result =>{
            return result.price === price;
        })
    }

    return (
    <View style={{ flex: 1}}>

        <SerachBar term={term} 
        onTermChnage={newTerm => setTerm(newTerm)}
        onTermSubmit={()=>searchAPi(term)}
        
        />
        <Text>{errorMsg}</Text>
        {/* <Text style={styles.resultLength}>We have found {result.length} results</Text> */}

        <ScrollView>
            <ResultsList  result={filterResultsByPrice('$')} title='Low Price'/>
            <ResultsList result={filterResultsByPrice('$$')} title='Medium Price'/>
            <ResultsList result={filterResultsByPrice('$$$')} title='High Price'/>
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    resultLength:{

    }
});

export default SearchScreen;