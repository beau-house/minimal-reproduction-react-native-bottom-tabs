import AnotherStackNavigator from './AnotherStackNavigator'
import { createNativeBottomTabNavigator } from '@bottom-tabs/react-navigation'
import HomeStackNavigator from './HomeStackNavigator'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useColorScheme } from 'react-native'

import ScreenOne from './screens/ScreenOne'
import ScreenTwo from './screens/ScreenTwo'

const Tabs = createNativeBottomTabNavigator()

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'purple',
    primary: 'orange',
    card: 'green',
  },
}

const rootNavDefaultTheme = {
  ...DarkTheme,
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
  const scheme = useColorScheme()

  return (
    <NavigationContainer theme={rootNavDefaultTheme}>
      <Tabs.Navigator
        barTintColor={'hsl(0, 0%, 8.5%)'}
        hapticFeedbackEnabled
        ignoresTopSafeArea
        screenOptions={{ lazy: false }}
        scrollEdgeAppearance="transparent"
        tabBarActiveTintColor={'red'}
        tabBarInactiveTintColor={'rgb(155,155,155)'}
        tabLabelStyle={{
          fontFamily: 'FKGrotesk-Medium',
          fontSize: 11,
        }}
        translucent={false}
      >
        <Tabs.Screen
          name="Screen One"
          component={HomeStackNavigator}
          options={{
            tabBarIcon: () => ({ sfSymbol: 'person.fill' }),
          }}
        />

        <Tabs.Screen
          name="Screen Two"
          component={AnotherStackNavigator}
          options={{
            tabBarIcon: () => ({ sfSymbol: 'book.fill' }),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}
