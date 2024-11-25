import { useColorScheme } from 'react-native'
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react'
import { getData, storeData } from '../lib/utils/asyncStorage'

type Theme = {
  mode: 'light' | 'dark' | null
}

type ThemeContextType = {
  fetchStoredTheme: () => Promise<void>
  theme: Theme
  updateTheme: (colorScheme: { mode: 'light' | 'dark' | null }) => void
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

type ThemeProviderProps = {
  children: ReactNode
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const colorScheme = useColorScheme()
  const [theme, setTheme] = useState<Theme>({ mode: colorScheme || 'light' })

  const fetchStoredTheme = useCallback(async () => {
    try {
      const themeData = await getData('homeTheme')
      if (themeData && typeof themeData === 'string') {
        const parsedThemeData: Theme = JSON.parse(themeData)
        if (parsedThemeData && ['light', 'dark', null].includes(parsedThemeData.mode)) {
          setTheme(parsedThemeData)
        }
      }
    } catch (error) {
      console.error('Failed to fetch stored theme:', error)
    }
  }, [])

  const updateTheme = useCallback(
    async (colorScheme: { mode: 'light' | 'dark' | null }) => {
      setTheme(colorScheme)
      try {
        await storeData('homeTheme', JSON.stringify(colorScheme))
      } catch (error) {
        console.error('Failed to store theme:', error)
      }
    },
    []
  )

  useEffect(() => {
    if (colorScheme) {
      updateTheme({ mode: colorScheme })
    }
  }, [colorScheme, updateTheme])

  useEffect(() => {
    fetchStoredTheme()
  }, [fetchStoredTheme])

  const value = useMemo(
    () => ({
      fetchStoredTheme,
      theme,
      updateTheme,
    }),
    [fetchStoredTheme, theme, updateTheme]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
