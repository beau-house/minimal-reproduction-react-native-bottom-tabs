import RootNavigation from './src/RootNavigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SystemBars } from 'react-native-edge-to-edge'
import ThemeProvider from './src/state/ThemeContext'

export default function App() {
  return (
    <SafeAreaProvider>
      <SystemBars style="light" />
      <ThemeProvider>
        <RootNavigation />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
