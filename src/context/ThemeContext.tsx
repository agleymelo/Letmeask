import { ReactNode, createContext } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'

import { usePersistedState } from '../hooks/usePersistedState'

import dark from '../styles/theme/dark'
import light from '../styles/theme/light'

type ThemeContextType = {
  theme: DefaultTheme
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
)

type ThemeContextProviderType = {
  children: ReactNode
}

export function ThemeContextProvider({
  children
}: ThemeContextProviderType): JSX.Element {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
