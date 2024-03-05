import React, { useRef } from "react";
import LottieView  from 'lottie-react-native'
import { Dimensions } from "react-native";

const Loading = () =>{
    const animation = useRef(null);
    return(
        <LottieView source={require('../../../assets/loading.json')} autoPlay loop        
          ref={animation}
          style={{
            height:Dimensions.get('screen').height,
            width:Dimensions.get('screen').width
          }}/>
    )
}

export default Loading;