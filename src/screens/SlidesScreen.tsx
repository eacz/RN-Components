import React, { useState, useRef } from 'react'
import { Dimensions, Text, View, TouchableOpacity, Animated } from 'react-native';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel'
import slides from '../data/slides';
import Icon from 'react-native-vector-icons/Ionicons';
import useAnimation from '../hooks/useAnimation';
import renderSlideItem from '../components/renderSlideItem';
import { StackScreenProps } from '@react-navigation/stack';

const {height: heightScreen, width: widthScreen} = Dimensions.get('window')

interface Props extends StackScreenProps <any,any> {};

const SlidesScreen = ({navigation} : Props) => {
  const {fadeIn, opacity} = useAnimation()
  const buttonVisible = useRef(false)
  const [activeSlide, setActiveSlide] = useState(0)
  
  const handleNavigation = () => {
    if(buttonVisible.current){
      navigation.navigate('HomeScreen')
    }
  }

  return (
    <SafeAreaView style={styles.container} >
      <Carousel
        data={slides} layout="default"
        renderItem={({item}) => renderSlideItem({item})}
        sliderWidth={widthScreen} itemWidth={widthScreen}
        onSnapToItem={(index) => {
          setActiveSlide(index)
          if(index === 2) {
            buttonVisible.current = true;
            fadeIn()
          }
        }}
      />
      <View style={styles.paginationContainer} >
        <Pagination  
          dotsLength={slides.length} activeDotIndex={activeSlide} dotStyle={styles.dotStyle}
        />
         <Animated.View style={{opacity}} >
            <TouchableOpacity style={styles.nextButton} activeOpacity={0.9} onPress={handleNavigation} >
              <Text style={styles.nextButtonText}>Next</Text>
              <Icon name="chevron-forward-outline" color="white" size={30} />
            </TouchableOpacity>
         </Animated.View>
      </View>
    </SafeAreaView>
  )
}

export default SlidesScreen

const styles = StyleSheet.create({
    container: {
      flex:1, 
      paddingTop: 50,
      marginRight: 40
    },
    dotStyle: {
      width: 10, 
      height: 10, 
      borderRadius: 10, 
      backgroundColor: '#5856D6'
    },
    paginationContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 10
    },
    nextButton: {
      flexDirection: 'row',
      backgroundColor: '#5856d6',
      height: 40,
      width: 120,
      borderRadius: 10,
      justifyContent: 'space-evenly',
      alignItems: 'center'
    },
    nextButtonText: {
      color: 'white',
      fontSize: 20
    }
});