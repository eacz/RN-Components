import React from 'react'
import { useState } from 'react';
import { Text } from 'react-native';
import { View, Button, Modal, StyleSheet } from 'react-native'
import HeaderTitle from '../components/HeaderTitle';
import globalStyles from '../themes/AppTheme';

const ModalScreen = () => {
  const [visibility, setVisibility] = useState(false)
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
          <View style={styles.modalContent}>
            <HeaderTitle title="Modal" />
            <Text>Modal Body</Text>
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
      backgroundColor: '#ffffff',
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
