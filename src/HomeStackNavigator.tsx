import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { getDefaultScreenOptions } from './lib/utils/navigation/navigatorScreenOptions'
import ScreenOne from './screens/ScreenOne'

const HomeStack = createNativeStackNavigator()

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{ ...getDefaultScreenOptions('Stack One', true) }}
    >
      <HomeStack.Screen name="Home" component={ScreenOne} />
    </HomeStack.Navigator>
  )
}
