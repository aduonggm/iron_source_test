import { View, Text, Button, StatusBar, StyleSheet, Image } from 'react-native'

import NotificationButton from './NotificationButton'
import StoryList from './StoryList'

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#ffffff' barStyle='dark-content' />
      <View style={styles.appBar}>
        <Text style={styles.textHeader}> Postinger. </Text>
        <NotificationButton />
      </View>
      <StoryList />
    </View>
  )
}

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 24,
    color: 'black',
    fontWeight: '500'
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff'
  },

  appBar: {
    height: 60,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between'
  }
})
export default HomeScreen
