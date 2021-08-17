import React from 'react'
import { View, Button, Alert, Platform, Text } from 'react-native'
import prompt from 'react-native-prompt-android';

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
  const showPrompt = () => {
    //IOS ONLY
    //Alert.prompt(
    //  'Prompt', 
    //  'Prompt message', 
    //  (text) => console.log(text),
    //  'default',
    //  'nothing',
    //  'number-pad'
    //)
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
       {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
       {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
      ],
      {
          type: 'secure-text',
          cancelable: false,
          defaultValue: 'test',
          placeholder: 'placeholder'
      },
  );
  }

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button title="Show Alert" onPress={showAlert} />

      <Button title="Show Prompt" onPress={showPrompt} />
    </View>
  )
}

export default AlertScreen
