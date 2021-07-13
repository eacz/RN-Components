import React from 'react'
import { useState } from 'react'
import { View, Text, Animated, ActivityIndicator } from 'react-native'
import useAnimation from '../hooks/useAnimation'

interface Props {
  uri: string
}

const FadeInImage = ({uri}:Props) => {
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
      style={{width: '100%', height:400, opacity}}
      />
    </View>
  )
}

export default FadeInImage
