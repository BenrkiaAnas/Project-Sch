'use client'

import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'shinobi-theme'

export function useThemePreference() {
  const [theme, setThemeState] = useState<Theme>('light')

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null
    if (stored === 'light' || stored === 'dark') {
      setThemeState(stored)
      document.documentElement.classList.toggle('dark', stored === 'dark')
    }
  }, [])

  function setTheme(next: Theme) {
    setThemeState(next)
    localStorage.setItem(STORAGE_KEY, next)
    document.documentElement.classList.toggle('dark', next === 'dark')
  }

  function toggle() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return { theme, setTheme, toggle }
}
