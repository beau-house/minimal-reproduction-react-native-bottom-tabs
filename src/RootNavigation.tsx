import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NativeTabNavigator from './NativeTabNavigator'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'

import ScreenOne from './screens/ScreenOne'
import ScreenTwo from './screens/ScreenTwo'

const RootStack = createNativeStackNavigator()

const rootNavDefaultTheme = {
  ...DarkTheme,
  dark: true,
  colors: {
    primary: 'hsl(0, 0%, 62.8%)',
    background: 'hsl(0, 0%, 8.5%)',
    card: 'hsl(0, 0%, 8.5%)',
    text: 'hsl(0, 0%, 93.0%)',
    border: 'magenta',
    notification: 'magenta',
  },
}

export default function RootNavigation() {
  return (
    <NavigationContainer theme={rootNavDefaultTheme}>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name="Tab"
          component={NativeTabNavigator}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
