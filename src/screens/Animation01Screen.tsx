import React from 'react'
import { useRef } from 'react'
import { Easing } from 'react-native'
import { Animated, View, Button } from 'react-native'
import styles from '../themes/AppTheme'

const Animation01Screen = () => {
  const opacity = useRef(new Animated.Value(0)).current
  const top = useRef(new Animated.Value(-100)).current

  const fadeIn = (duration: number = 300) => {
    Animated.timing(
      opacity,
      {
        toValue: 1,
        duration,
        useNativeDriver: true
      }
    ).start()

    Animated.timing(
      top,
      {
        toValue: 0,
        duration: duration+300,
        useNativeDriver: true,
        easing: Easing.bounce
      }
    ).start()
  }

  const fadeOut = (duration: number = 300) => {
    Animated.timing(
      opacity,
      {
        toValue: 0,
        duration,
        useNativeDriver: true
      }
    ).start()

    Animated.timing(
      top,
      {
        toValue: -100,
        duration: duration+300,
        useNativeDriver: true,
      }
    ).start()
    
  }

  return (
    <View style={styles.containerCenter}>
      <Animated.View 
        style={{
          ...styles.purpleBox, 
          opacity,
          marginBottom: 20,
          transform: [{
            translateY: top
          }]
        }} 
      />
      <Button color="green" title="fadeIn" onPress={() => fadeIn()}/>
      <Button color="red" title="fadeOut" onPress={() => fadeOut()}/>
    </View>
  )
}

export default Animation01Screen
