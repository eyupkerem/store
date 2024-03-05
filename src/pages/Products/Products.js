import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import ProductCard from "../../components/ProductCard/ProductCard";
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const Products = ({navigation}) =>{
    const {loading,error,data} = useFetch(apiUrl);

    const handleProductSelect = (id) =>{
        navigation.navigate('DetailPage' , {id})
    }

    const renderProduct = ({item}) => <ProductCard product={item} onSelect={()=>handleProductSelect(item.id)}/>;

    if (error){
        return(
        <View>
            <Text>Bir hata oluştu {error.message}</Text>
            <Error style={{flex: 1}}/>
        </View>
        )
    }
    
    return(
          <View>
              {
                 loading ? (
                     <Loading style={{flex: 1}}/>
                 ) : (
                     <FlatList data={data} renderItem={renderProduct}/>
                 )
              }   
          </View>
    );
}
export default Products;