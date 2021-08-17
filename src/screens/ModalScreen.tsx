import React from 'react'
import { useState, useContext } from 'react';
import { Text } from 'react-native';
import { View, Button, Modal, StyleSheet } from 'react-native'
import HeaderTitle from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import globalStyles from '../themes/AppTheme';

const ModalScreen = () => {
  const [visibility, setVisibility] = useState(false)
  const {theme: {colors: { card, text }}} = useContext(ThemeContext)
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal" />
      <Button title="Open Modal" onPress={() => setVisibility(true)} />
      <Modal 
        animationType="fade"
        transparent
        visible={visibility}
      >
        <View style={styles.modalContainer}>
          <View style={{...styles.modalContent, backgroundColor: card}}>
            <HeaderTitle title="Modal" />
            <Text style={{color: text}} >Modal Body</Text>
            <Button title="Close" onPress={() => setVisibility(false)} />

          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    ...globalStyles,
    modalContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.3)'
    },
    modalContent: {
      width: '90%',
      borderRadius: 5,
      padding: 10,
      shadowOffset: {
        height: 10,
        width: 0
      },
      shadowOpacity: 0.25,
      elevation: 10
    },


});

export default ModalScreen
