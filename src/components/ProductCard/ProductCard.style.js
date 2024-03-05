import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container:{
        backgroundColor:'#e0e0e0',
        borderWidth:1,
        borderColor:'#bdbdbd',
        margin:10,
        flexDirection:'row'
    },
    image:{
        width:100,
        minHeight:100,
        resizeMode:'contain',
        backgroundColor:'white'
    },
    body_container:{
        flex:1,
        justifyContent:'space-between'
    },
    title:{
        fontWeight:'bold',
        padding:5,
        fontSize:18
    },
    price:{
        textAlign:'right',
        fontSize:15,
        fontStyle:'italic'
    }
})