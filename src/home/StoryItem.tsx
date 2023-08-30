import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

type StoryProp = {
  onPress: () => void
}

const StoryItem: React.FC<StoryProp> = (props: StoryProp) => {
  return (
    <View style={styles.container}>
      <Image source={require('../ic/temp.jpeg')} style={styles.image} />
      <Image source={require('../ic/human.jpeg')} style={styles.avatar} />
      <Text style={styles.text}>Jonathan</Text>
    </View>
  )
}

export default StoryItem

const styles = StyleSheet.create({
  container: {
    width: 91,
    height: 176,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 4
  },
  text: {
    fontSize: 12,
    color: '#23252B'
  },
  image: {
    width: '100%',
    height: 140,
    borderRadius: 8
  },
  avatar: {
    position: 'absolute',
    width: 32,
    height: 32,
    top: 124,
    borderRadius: 16,
    borderWidth: 2, // Border width
    borderColor: 'white', // Border color
    overflow: 'hidden' // Ensure the image stays within the circle container
  }
})
