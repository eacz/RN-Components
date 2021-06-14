import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import FlatListHeader from '../components/FlatListHeader'
import FlatListItemSeparator from '../components/FlatListItemSeparator'
import FlatListMenuItem from '../components/FlatListMenuItem'
import MenuItem from '../interfaces/MenuItemInterface'
import styles from '../themes/AppTheme'



const menuItems : MenuItem[] = [
  {
    name: 'Animation 01',
    icon: 'cube-outline',
    component: 'Animation01Screen'
  },
  {
    name: 'Animation 02',
    icon: 'albums-outline',
    component: 'Animation02Screen'
  },
]

const HomeScreen = () => {

  return (
    <View style={{...styles.globalMargin,flex: 1, }}>
      <FlatList 
        data={menuItems}
        renderItem={({item}) =>  <FlatListMenuItem menuItem={item} />}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={ () => <FlatListHeader title="Menu options" /> }
        ItemSeparatorComponent={ FlatListItemSeparator }
      />
    </View>
  )
}

export default HomeScreen
