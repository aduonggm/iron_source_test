import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StoryItem from './StoryItem'

const data = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
  { id: '4', title: 'Item 4' },
  { id: '5', title: 'Item 4' },
  { id: '6', title: 'Item 4' },
  { id: '7', title: 'Item 4' }
  // Add more items as needed
]
interface ListItem {
  id: string
  title: string
}

const StoryList = () => {
  const renderItem = ({ item, index }: { item: ListItem; index: number }) => {
    if (index == 0) {
      return <Text>the first item</Text>
    }

    return (
      <StoryItem
        onPress={() => {
          console.log('on click i')
        }}
      />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal={true} // Set horizontal to true
        showsHorizontalScrollIndicator={false} // Hide horizontal scroll bar
        overScrollMode='never' // Disable over-scrolling
      />
    </View>
  )
}

export default StoryList

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 40
  },
  item: {
    backgroundColor: '#3498db',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8
  },
  title: {
    fontSize: 16,
    color: '#fff'
  }
})
