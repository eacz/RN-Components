import React, { useContext } from 'react'
import { useState } from 'react';
import { View, ScrollView, RefreshControl, Text, Button } from 'react-native';
import HeaderTitle from '../components/HeaderTitle'
import styles from '../themes/AppTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const PullToRefreshScreen= () => {
  const {theme: { colors: { text, border, background, primary } }} = useContext(ThemeContext)
  const {top} = useSafeAreaInsets()
  const [refreshing, setRefreshing] = useState(false)
  const [data, setData] = useState<string>()
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('end');
      setData('Hello world')
      setRefreshing(false)
    }, 3000);
  }

  return (
    <ScrollView
      style={{marginTop: refreshing ? top : 0}}
      refreshControl={
        <RefreshControl 
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressBackgroundColor={primary}
          colors={['white', 'red', 'orange']}
          style={{backgroundColor: background}}
          title="Refreshing" //show a toast when refreshing active
          titleColor={text}
        />
      }
    >
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to refresh" />
        <Text style={{color: text}}>{data}</Text>
        {data ? 
              <View style={{width:200, marginTop: 20, alignItems: 'flex-start',}}>
                <Button title="Reset" onPress={() => setData('')} /> 
              </View>
              : null
        }
      </View>
    </ScrollView>
  )
}

export default PullToRefreshScreen
