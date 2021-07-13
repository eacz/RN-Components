import React from 'react'
import { useState } from 'react';
import { ActivityIndicator, Image } from 'react-native';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import FadeInImage from '../components/FadeInImage';

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0,1,2,3,4,5])
  
  const renderItem = (item:number) => {
    return (
      <FadeInImage 
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
        ListHeaderComponent={() => <HeaderTitle title="InfiniteScroll" /> }
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
            <View style={{height:100, justifyContent: 'center', alignItems: 'center', width: '100%'}}> 
              <ActivityIndicator size={30} color="#5856D6" /> 
            </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    textItem: {
      backgroundColor: 'green',
      height: 150
    }
});

export default InfiniteScrollScreen
