import React from 'react'
import { View, Button, Alert } from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import styles from '../themes/AppTheme'

const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert('Title', 'Subtitle', [
      {text: 'cancel', style: 'destructive',},
      {text: 'OK'}
    ],
    //{cancelable: true, onDismiss: () => console.log('dismissed')}
    )
  }
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button title="Show Alert" onPress={showAlert} />
    </View>
  )
}

export default AlertScreen
