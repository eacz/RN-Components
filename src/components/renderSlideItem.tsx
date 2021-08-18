import React, { useContext } from 'react'
import { Image, StyleSheet, Text, View } from "react-native"
import { Slide } from "../data/slides"
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
  item: Slide
}

const RenderSlideItem = ({item} : Props) => {
  const {theme: {colors: { primary, text, background }}} = useContext(ThemeContext)
  return (
    <View style={{...styles.container, backgroundColor: background}} >
      <Image source={item.img} style={styles.image} />
      <Text style={{...styles.title, color: primary}}>{item.title}</Text>
      <Text style={{...styles.subtitle, color: text}}>{item.desc}</Text>
    </View>
  )
}

export default RenderSlideItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  subtitle: {
    fontSize: 16
  },
});
