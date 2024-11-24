import RootNavigation from './src/RootNavigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SystemBars } from 'react-native-edge-to-edge'

export default function App() {
  return (
    <SafeAreaProvider>
      <SystemBars style="light" />
      <RootNavigation />
    </SafeAreaProvider>
  )
}
