import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native'
import NativeTabNavigator from './src/NativeTabNavigator'

const RootStack = createNativeStackNavigator()

const rootNavDefaultTheme = {
  ...DefaultTheme,
  colors: {
    primary: 'hsl(0, 0%, 62.8%)',
    background: 'hsl(0, 0%, 20%)',
    card: 'hsl(0, 0%, 8.5%)',
    text: 'hsl(0, 0%, 100%)',
    border: 'magenta',
    notification: 'magenta',
  },
}

export default function App() {
  return (
    <NavigationContainer theme={rootNavDefaultTheme}>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Tab"
          component={NativeTabNavigator}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
