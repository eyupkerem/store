import React from "react";
import { Image, Text, View } from "react-native";
import styles from './Detail.style'
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const Detail = ({route}) =>{
    const {id}=route.params;
    const{data,loading,error}=useFetch(`${apiUrl}/${id}`)

    if (error){
        return <Error />
    }
    
    if(loading){
        return <Loading/>
    }
    
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: data.image}} />
              <View style={styles.body_container}> 
                <Text style={styles.title}> {data.title} </Text>
                <Text style={styles.desc}> {data.description} </Text>
                <Text style={styles.price}> {data.price} TL</Text>
              </View>
        </View>
    );
}
export default Detail;

