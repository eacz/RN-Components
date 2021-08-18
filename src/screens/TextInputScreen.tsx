import React, { useContext } from 'react'
import { useState } from 'react';
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Text } from 'react-native';
import CustomSwitch from '../components/CustomSwitch';
import HeaderTitle from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import useForm from '../hooks/useForm';
import stylesTheme from '../themes/AppTheme';

const TextInputScreen = () => {
  const formInitState = {
    name: '',
    email: '',
    phone: '',
    isSubscribed: false
  }
  const {form, onChange} = useForm(formInitState);
  const {theme: { colors: { text, border } }} = useContext(ThemeContext)
  

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    > 
      <ScrollView>
        <View style={styles.globalMargin}>
          <HeaderTitle title="Text Inputs" />
          <TextInput 
            style={{...styles.textInput, borderColor: border, color: text}}
            placeholder="Write your name"
            placeholderTextColor="gray"
            autoCorrect={false}
            autoCapitalize='words'
            onChangeText={(text) => onChange(text, 'name')}
            />
          <TextInput             
            style={{...styles.textInput, borderColor: border, color: text}}
            placeholder="Write your email"
            placeholderTextColor="gray"
            autoCorrect={false}
            autoCapitalize='none'
            onChangeText={(text) => onChange(text, 'email')}
            keyboardType='email-address'
            />

          <TextInput 
            style={{...styles.textInput, borderColor: border, color: text}}
            placeholder="Write your phone"
            placeholderTextColor="gray"
            autoCorrect={false}
            onChangeText={(text) => onChange(text, 'phone')}
            keyboardType="number-pad"
            />

            <View style={styles.switchRow}>
              <Text style={{...styles.switchText, color: text}}>Subscribe: </Text>
              <CustomSwitch onChange={(value) => onChange(value, 'isSubscribed')} isOn={form.isSubscribed}  />
            </View>
            <HeaderTitle title={JSON.stringify(form, null, 2)} />
            
        </View>
    </ScrollView>
    </KeyboardAvoidingView>
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
  },
  switchText: {
    fontSize: 25
  },
  switchRow: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between'
  }
});

export default TextInputScreen
