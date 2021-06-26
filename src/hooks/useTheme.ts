import { useContext } from 'react'

import { ThemeContext } from '../context/ThemeContext'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useTheme() {
  const context = useContext(ThemeContext)

  return context
}
