import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type SecondsScreenProp = {
  count: number
}

const SecondsScreen: React.FC<SecondsScreenProp> = (seconds) => {
  return (
    <View>
      <Text>{seconds.count}</Text>
    </View>
  )
}

export default SecondsScreen

const styles = StyleSheet.create({})
