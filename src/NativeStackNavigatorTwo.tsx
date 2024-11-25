import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ScreenTwo from './screens/ScreenTwo'

const NativeStackTwo = createNativeStackNavigator()

export default function NativeStackNavigatorTwo() {
  return (
    <NativeStackTwo.Navigator
      screenOptions={{
        headerBlurEffect: 'dark',
        headerLargeTitle: true,
        headerTransparent: true,
      }}
    >
      <NativeStackTwo.Screen
        name="Screen Two"
        component={ScreenTwo}
        options={{ headerTitle: 'Stack Two' }}
      />
    </NativeStackTwo.Navigator>
  )
}
