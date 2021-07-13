import React from 'react'
import { useState } from 'react'
import { View, Animated, ActivityIndicator, StyleProp, ImageStyle } from 'react-native'
import useAnimation from '../hooks/useAnimation'

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>
}

const FadeInImage = ({uri, style = {} }:Props) => {
  const {opacity, fadeIn} = useAnimation()
  const [isLoading, setIsLoading] = useState(true)

  const finishLoading = () => {
    setIsLoading(false)
    fadeIn()
  }
  
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}> 
    {
      isLoading && <ActivityIndicator style={{position: 'absolute'}} size={30} color="#5856D6" />
    }
    <Animated.Image 
      onLoadEnd={finishLoading}
      source={{uri}}
      style={{...style as any, opacity}}
      />
    </View>
  )
}

export default FadeInImage
