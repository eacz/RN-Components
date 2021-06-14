import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MenuItem from '../interfaces/MenuItemInterface'

interface Props {
  menuItem: MenuItem
}

const FlatListMenuItem = ({menuItem} : Props) => {
    return (
      <TouchableOpacity activeOpacity={0.6}>
        <View style={styles.container}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name={menuItem.icon} color="grey" size={23} />
            <Text style={styles.itemText}>{menuItem.name}</Text>
          </View>
          <Icon name="chevron-forward-outline" color="grey" size={23} />
        </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-between'
    },
    itemText: {
      marginLeft: 5,
      fontSize: 18
    }
});

export default FlatListMenuItem
