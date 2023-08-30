import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SettingsScreen from './SettingsScreen'
import HomeScreen from './home/HomeScreen'
import { Image, StyleSheet } from 'react-native'

const BottomTab = createBottomTabNavigator()

function MyTabs() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 80
        },
        tabBarIcon: ({ color, size }) => {
          let source
          switch (route.name) {
            case 'Home':
              source = require('./ic/ic_home.png')
              break
            case 'Search':
              source = require('./ic/ic_search.png')
              break
            case 'Message':
              source = require('./ic/ic_message.png')
              break
            case 'Profile':
              source = require('./ic/ic_profile.png')
              break
            default:
              source = require('./ic/ic_add.png')
              return <Image source={source} style={[styles.addIcon]} />
          }

          return <Image source={source} style={[styles.icon]} />
        },
        tabBarShowLabel: false
      })}
    >
      <BottomTab.Screen name='Home' component={HomeScreen} />
      <BottomTab.Screen name='Search' component={HomeScreen} />
      <BottomTab.Screen name='Add' component={HomeScreen} />
      <BottomTab.Screen name='Message' component={HomeScreen} />
      <BottomTab.Screen name='Profile' component={SettingsScreen} />
    </BottomTab.Navigator>
  )
}
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  },
  addIcon: {
    width: 70,
    height: 70
  }
})
export default MyTabs
