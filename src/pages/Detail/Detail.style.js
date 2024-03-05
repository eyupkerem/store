import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1
    },
    image:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height / 3 ,
        resizeMode:'contain',
        backgroundColor:'white'
    },
    body_container:{
        padding:10
    },
    title:{
        fontWeight:'bold',
        fontSize:25
    },
    desc:{
        fontStyle:'italic'

    },
    price:{
        fontWeight:'bold',
        fontSize:22,
        textAlign:'right'
    }

})