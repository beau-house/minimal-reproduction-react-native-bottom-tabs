import NativeStackNavigatorTwo from './NativeStackNavigatorTwo'
import { createNativeBottomTabNavigator } from '@bottom-tabs/react-navigation'
import NativeStackNavigatorOne from './NativeStackNavigatorOne'

import ScreenOne from './screens/ScreenOne'
import ScreenTwo from './screens/ScreenTwo'

const Tab = createNativeBottomTabNavigator()

export default function NativeTabNavigator() {
  return (
    <Tab.Navigator
      barTintColor={'hsl(0, 0%, 6%)'}
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
        name="Screen One"
        component={ScreenOne}
        options={{
          lazy: false,
          tabBarIcon: () => ({ sfSymbol: 'person.fill' }),
        }}
      />

      <Tab.Screen
        name="Screen Two"
        component={ScreenTwo}
        options={{
          lazy: false,
          tabBarIcon: () => ({ sfSymbol: 'book.fill' }),
        }}
      />
    </Tab.Navigator>
  )
}
