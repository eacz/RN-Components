import React from 'react'
import { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native'
import HeaderTitle from '../components/HeaderTitle';
import stylesTheme from '../themes/AppTheme';

const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const handleChange = (text: string, field: keyof typeof form) => {
    setForm({...form, [field]:text})
  }

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Text Inputs" />
      <TextInput 
        style={styles.textInput}
        placeholder="Write your name"
        placeholderTextColor="gray"
        autoCorrect={false}
        autoCapitalize='words'
        onChangeText={(text) => handleChange(text, 'name')}
      />
      <TextInput 
        style={styles.textInput}
        placeholder="Write your email"
        placeholderTextColor="gray"
        autoCorrect={false}
        autoCapitalize='none'
        onChangeText={(text) => handleChange(text, 'email')}
        keyboardType='email-address'
      />
      <TextInput 
        style={styles.textInput}
        placeholder="Write your phone"
        placeholderTextColor="gray"
        autoCorrect={false}
        onChangeText={(text) => handleChange(text, 'phone')}
        keyboardType="number-pad"
      />
      <HeaderTitle title={JSON.stringify(form, null, 3)} />
    </View>
  )
}
const styles = StyleSheet.create({
    ...stylesTheme,
    textInput: {
      borderWidth: 2,
      height: 50,
      paddingHorizontal: 10,
      marginVertical: 10,
      borderColor: 'rgba(0,0,0, 0.5)',
      color: '#000000',
      borderRadius: 10,
    }
});

export default TextInputScreen
