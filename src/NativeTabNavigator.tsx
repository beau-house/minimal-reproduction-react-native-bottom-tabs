import NativeStackNavigatorTwo from './NativeStackNavigatorTwo'
import { createNativeBottomTabNavigator } from '@bottom-tabs/react-navigation'
import NativeStackNavigatorOne from './NativeStackNavigatorOne'

import ScreenOne from './screens/ScreenOne'
import ScreenTwo from './screens/ScreenTwo'

const Tab = createNativeBottomTabNavigator()

export default function NativeTabNavigator() {
  return (
    <Tab.Navigator
      barTintColor={'hsl(0, 0%, 5%)'}
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
      <Tab.Screen
        name="Stack One"
        component={NativeStackNavigatorOne}
        options={{
          headerBlurEffect: 'dark',
          headerLargeTitle: true,
          headerTitle: 'Screen One',
          headerTransparent: true,
          lazy: false,
          tabBarIcon: () => ({ sfSymbol: 'person.fill' }),
        }}
      />

      <Tab.Screen
        name="Stack Two"
        component={NativeStackNavigatorTwo}
        options={{
          headerBlurEffect: 'dark',
          headerLargeTitle: true,
          headerTitle: 'Screen Two',
          headerTransparent: true,
          lazy: false,
          tabBarIcon: () => ({ sfSymbol: 'book.fill' }),
        }}
      />
    </Tab.Navigator>
  )
}
