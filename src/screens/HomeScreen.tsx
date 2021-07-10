import React from 'react'
import { View, FlatList } from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import FlatListMenuItem from '../components/FlatListMenuItem'
import menuItems from '../data/menuItems'
import styles from '../themes/AppTheme'
import ListItemSeparator from '../components/ListItemSeparator'





const HomeScreen = () => {

  return (
    <View style={{...styles.globalMargin,flex: 1, }}>
      <FlatList 
        data={menuItems}
        renderItem={({item}) =>  <FlatListMenuItem menuItem={item} />}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={ () => <HeaderTitle title="Menu options" /> }
        ItemSeparatorComponent={ ListItemSeparator }
      />
    </View>
  )
}

export default HomeScreen
