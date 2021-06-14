import React from 'react'
import { useRef } from 'react'
import { Animated, View } from 'react-native'
import styles from '../themes/AppTheme'

const Animation01Screen = () => {
  const opacity = useRef(new Animated.Value(0)).current
  return (
    <View style={styles.containerCenter}>
      <Animated.View 
        style={{
          ...styles.purpleBox, 
          opacity
        }} 
      />
    </View>
  )
}

export default Animation01Screen
