import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ScreenTwo from './screens/ScreenTwo'

const AnotherStack = createNativeStackNavigator()

export default function AnotherStackNavigator() {
  return (
    <AnotherStack.Navigator>
      <AnotherStack.Screen
        name="Not home"
        component={ScreenTwo}
        options={{ headerTitle: 'Screen Two' }}
      />
    </AnotherStack.Navigator>
  )
}
