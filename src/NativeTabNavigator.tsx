import AnotherStackNavigator from './AnotherStackNavigator'
import { createNativeBottomTabNavigator } from '@bottom-tabs/react-navigation'
import HomeStackNavigator from './HomeStackNavigator'

const Tabs = createNativeBottomTabNavigator()

export default function NativeTabNavigator() {
  return (
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
        name="Stack One"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: () => ({ sfSymbol: 'person.fill' }),
        }}
      />

      <Tabs.Screen
        name="Stack Two"
        component={AnotherStackNavigator}
        options={{
          tabBarIcon: () => ({ sfSymbol: 'book.fill' }),
        }}
      />
    </Tabs.Navigator>
  )
}
