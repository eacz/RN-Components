import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from "react-native-safe-area-context"
import styles from '../themes/AppTheme'
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
  title: string
}

const HeaderTitle = ({title="Title"}:Props) => {
  const {top} = useSafeAreaInsets()
  const {theme: {colors: { text, }}} = useContext(ThemeContext)
  
  return (
    <View style={{marginTop: top+10, marginBottom: 10}} >
      <Text style={{...styles.title, color: text}} >{title}</Text>
    </View>
  )
}

export default HeaderTitle