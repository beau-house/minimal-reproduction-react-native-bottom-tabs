import { Platform } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { useTheme } from './state/ThemeContext'
import NativeTabNavigator from './NativeTabNavigator'

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

const rootNavAltTheme = {
  ...DarkTheme,
  dark: true,
  colors: {
    primary: 'hsl(0, 0%, 62.8%)',
    background: 'blue',
    card: 'hsl(0, 0%, 8.5%)',
    text: 'green',
    border: 'magenta',
    notification: 'magenta',
  },
}

export default function RootNavigation() {
  const { theme } = useTheme()

  return (
    <NavigationContainer
      theme={theme.mode === 'light' ? rootNavDefaultTheme : rootNavAltTheme}
    >
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
