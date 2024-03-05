import React, { useRef } from "react";
import LottieView  from 'lottie-react-native'
import { Dimensions } from "react-native";


const Error = () =>{
    const animation = useRef(null);
    return(
        <LottieView source={require('../../../assets/error.json')} autoPlay 
        ref={animation}
        style={{
          height:Dimensions.get('screen').height,
          width:Dimensions.get('screen').width
        }}/>
    )
}

export default Error;