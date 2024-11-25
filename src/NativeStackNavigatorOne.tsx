import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ScreenOne from './screens/ScreenOne'

const NativeStackOne = createNativeStackNavigator()

export default function NativeStackNavigatorOne() {
  return (
    <NativeStackOne.Navigator
      screenOptions={{
        headerBlurEffect: 'dark',
        headerLargeTitle: true,
        headerTransparent: true,
      }}
    >
      <NativeStackOne.Screen
        name="Screen One"
        component={ScreenOne}
        options={{ headerTitle: 'Stack One' }}
      />
    </NativeStackOne.Navigator>
  )
}
