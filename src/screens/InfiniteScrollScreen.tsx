import React, { useContext } from 'react'
import { useState } from 'react';
import { ActivityIndicator,  } from 'react-native';
import { FlatList, View } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import FadeInImage from '../components/FadeInImage';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const InfiniteScrollScreen = () => {
  const {theme: { colors: { border, primary } }} = useContext(ThemeContext)
  
  const [numbers, setNumbers] = useState([0,1,2,3,4,5])
  
  const renderItem = (item:number) => {
    return (
      <FadeInImage 
        style={{width: '100%', height: 400}}
        uri={`https://picsum.photos/id/${item}/500/400`}
      />
    )
  }
  
  const loadMore = () => {
    const newArray:number[] = [];

    for(let i = 0; i<5; i++){
      newArray[i] = numbers.length +i;
    }
    //to simulate an api call loading
    setTimeout(() => {
      setNumbers([...numbers, ...newArray])
    }, 1500);
  }
  return (
    <View style={{flex: 1}}>
      
      <FlatList
        data={numbers}
        keyExtractor={(item) => item.toString() }
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={() => (
          <View style={{marginHorizontal: 20}}> 
            <HeaderTitle title="InfiniteScroll" />
          </View>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
            <View style={{height:100, justifyContent: 'center', alignItems: 'center', width: '100%'}}> 
              <ActivityIndicator size={30} color={primary} /> 
            </View>
        )}
      />
    </View>
  )
}

export default InfiniteScrollScreen