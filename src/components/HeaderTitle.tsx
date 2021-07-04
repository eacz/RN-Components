import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from "react-native-safe-area-context"
import styles from '../themes/AppTheme'

interface Props {
  title: string
}

const HeaderTitle = ({title="Title"}:Props) => {
  const {top} = useSafeAreaInsets()
  return (
    <View style={{marginTop: top+10, marginBottom: 10}} >
      <Text style={styles.title} >{title}</Text>
    </View>
  )
}

export default HeaderTitle