/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import type {PropsWithChildren} from 'react';
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
// import {
//   Button,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
import MyTabs from "./src/MainScreen";

// type FourProps = {
//   title: string;
// };
// const Four: React.FC<FourProps> = ({title}) => {
//   const [count, setCount] = useState<number>(0);
//   useEffect(() => {
//     console.log('count change ', count);
//   }, [count]);
//   const updateState = useCallback(() => {
//     setCount(pre => pre + 1);
//   }, []);
//   return (
//     <View>
//       <Text>{title}</Text>
//       <Text>{count}</Text>
//       <Button title="Count change" onPress={updateState} />
//     </View>
//   );
// };

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="First" component={MyTabs}></Stack.Screen>
       <Stack.Screen name="Second" component={MyTabs}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
