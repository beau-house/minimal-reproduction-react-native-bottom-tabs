import { createNativeBottomTabNavigator } from '@bottom-tabs/react-navigation'
import { NavigationContainer } from '@react-navigation/native'
import ScreenOne from './src/ScreenOne'
import ScreenTwo from './src/ScreenTwo'

const Tab = createNativeBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  )
}
