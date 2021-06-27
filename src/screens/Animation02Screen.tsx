import React, {useRef} from 'react'
import { View, PanResponder, Animated } from 'react-native'
import styles from '../themes/AppTheme'

const Animation02Screen = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      { dx: pan.x, dy: pan.y, }, 
      ], 
      {useNativeDriver: false }
    ),
    onPanResponderRelease: () => {
      Animated.spring(
        pan,
        {toValue: {x: 0, y: 0}, useNativeDriver: false},
      ).start();
    },
  })

  return (
    <View style={styles.containerCenter}>
      <Animated.View 
      {...panResponder.panHandlers}
      style={[pan.getLayout(), styles.purpleBox, {backgroundColor: '#61dafb'}]} 
      />
    </View>
  )
}


export default Animation02Screen