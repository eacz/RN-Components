import React from 'react'
import { Image, StyleSheet, Text, View } from "react-native"
import { Slide } from "../data/slides"

interface Props {
  item: Slide
}

const renderSlideItem = ({item} : Props) => {
  return (
    <View style={styles.container} >
      <Image source={item.img} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.desc}</Text>
    </View>
  )
}

export default renderSlideItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 40,
    justifyContent: 'center'
  },
  image: {
    width: 300,
    height: 400,
    resizeMode: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856d6'
  },
  subtitle: {
    fontSize: 16
  },
});
