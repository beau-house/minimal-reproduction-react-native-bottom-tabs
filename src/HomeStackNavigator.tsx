import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ScreenOne from './screens/ScreenOne'

const HomeStack = createNativeStackNavigator()

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={ScreenOne}
        options={{ headerTitle: 'Screen One' }}
      />
    </HomeStack.Navigator>
  )
}
