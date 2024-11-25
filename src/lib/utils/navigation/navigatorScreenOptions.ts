import { Platform, PlatformColor } from 'react-native'

import type { NativeStackNavigationOptions } from '@react-navigation/native-stack'

export const getDefaultScreenOptions = (
  headerTitle: string,
  useLargeHeader = false
): NativeStackNavigationOptions => ({
  animation: 'default',
  headerBackTitleStyle: {
    fontFamily: 'FKGrotesk-Medium',
    fontSize: 14,
  },
  headerBackButtonDisplayMode: useLargeHeader ? 'default' : 'minimal',
  headerBackVisible: true,
  headerBlurEffect: 'dark', // iOS only
  ...(useLargeHeader && {
    // iOS only
    headerLargeStyle: {
      backgroundColor: PlatformColor('systemGroupedBackgroundColor').toString(),
    },
    headerLargeTitle: true,
    headerLargeTitleShadowVisible: false,
    headerLargeTitleStyle: {
      fontFamily: 'FKGrotesk-Bold',
      fontSize: 32,
    },
  }),
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? 'transparent' : 'rgba(0, 0, 0, 0.01)',
  },
  headerTitle,
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontFamily: 'FKGrotesk-Bold',
    fontSize: 16,
  },
  headerTransparent: Platform.OS === 'ios' ? true : false,
  statusBarBackgroundColor: 'transparent', // Android only
  statusBarTranslucent: true, // Android only
})
