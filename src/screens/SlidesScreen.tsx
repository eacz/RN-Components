import React from 'react'
import { useState } from 'react';
import { Dimensions, Text, View, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel'
import HeaderTitle from '../components/HeaderTitle';
import slides, { Slide } from '../data/slides';

const {height: heightScreen, width: widthScreen} = Dimensions.get('window')

const SlidesScreen = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  const renderItem = (item : Slide) => {
    return (
      <View style={styles.renderItemContainer} >
        <Image source={item.img} style={styles.renderItemImage} />
        <Text style={styles.renderItemTitle}>{item.title}</Text>
        <Text style={styles.renderItemSubtitle}>{item.desc}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container} >
      {/*<HeaderTitle title="SlideScreen" />*/}
      <Carousel
        //ref={(c) => { this._carousel = c; }}
        data={slides}
        renderItem={({item}) => renderItem(item)}
        sliderWidth={widthScreen}
        itemWidth={widthScreen}
        layout="default"
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <Pagination  
        dotsLength={slides.length}
        activeDotIndex={activeSlide}
        dotStyle={styles.dotStyle}
      />
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
    renderItemContainer: {
      flex: 1,
      backgroundColor: 'white',
      borderRadius: 5,
      padding: 40,
      justifyContent: 'center'
    },
    renderItemImage: {
      width: 300,
      height: 400,
      resizeMode: 'center'
    },
    renderItemTitle: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#5856d6'
    },
    renderItemSubtitle: {
      fontSize: 16
    },
    dotStyle: {
      width: 10, 
      height: 10, 
      borderRadius: 10, 
      backgroundColor: '#5856D6'
    }

});