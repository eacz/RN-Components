import { useRef } from "react"
import { Animated, Easing } from "react-native"

const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current
  const position = useRef(new Animated.Value(0)).current

  const fadeIn = (duration: number = 300) => {
    Animated.timing(
      opacity,
      {
        toValue: 1,
        duration,
        useNativeDriver: true
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
  }

  const startMovingPosition = (initPosition : number = -100, toPosition: number = 0, duration: number = 300) => {
    position.setValue(initPosition);
    Animated.timing(
      position,
      {
        toValue: toPosition,
        duration,
        useNativeDriver: true,
        //easing: Easing.bounce
      }
    ).start()
  }


  return {
    opacity,
    position,
    fadeIn,
    fadeOut,
    startMovingPosition
  }
}

export default useAnimation
