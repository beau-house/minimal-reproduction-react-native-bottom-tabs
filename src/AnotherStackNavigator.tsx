import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { getDefaultScreenOptions } from './lib/utils/navigation/navigatorScreenOptions'
import ScreenTwo from './screens/ScreenTwo'

const AnotherStack = createNativeStackNavigator()

export default function AnotherStackNavigator() {
  return (
    <AnotherStack.Navigator
      screenOptions={{ ...getDefaultScreenOptions('Stack Two', true) }}
    >
      <AnotherStack.Screen name="Not home" component={ScreenTwo} />
    </AnotherStack.Navigator>
  )
}
