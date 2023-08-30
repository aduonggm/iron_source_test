import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NotificationButton = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../ic/ic-bell.png')} style={styles.icon} />
      <Text style={styles.text}>5</Text>
    </View>
  )
}

export default NotificationButton

const styles = StyleSheet.create({
  container: {
    width: 35,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },

  icon: {
    width: 24,
    height: 24,
    tintColor: 'black',
    padding: 10,
    zIndex: 0
  },
  text: {
    padding: 2,
    width: 20,
    height: 16,
    fontSize: 10,
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    borderRadius: 10,
    alignSelf: 'flex-end',
    backgroundColor: 'red',
    alignContent: 'center',
    zIndex: 1,
    top: 0,
    position: 'absolute'
  }
})
