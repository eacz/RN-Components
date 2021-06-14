import React from 'react'
import { Animated, View, Button } from 'react-native'
import useAnimation from '../hooks/useAnimation'
import styles from '../themes/AppTheme'

const Animation01Screen = () => {

  const {opacity, position, fadeIn, fadeOut, startMovingPosition} = useAnimation()

  return (
    <View style={styles.containerCenter}>
      <Animated.View 
        style={{
          ...styles.purpleBox, 
          opacity,
          marginBottom: 20,
          transform: [{
            translateY: position
          }]
        }} 
      />
      <Button color="green" title="fadeIn" onPress={() => {fadeIn(); startMovingPosition(-100,0)}}/>
      <Button color="red" title="fadeOut" onPress={() => {fadeOut(); startMovingPosition(0,-100)}}/>
    </View>
  )
}

export default Animation01Screen
