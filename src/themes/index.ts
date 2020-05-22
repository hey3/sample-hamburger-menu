import { ColorTheme, baseDark, baseLight } from './colorTheme'

export type ColorMode = 'light' | 'dark'
export type BaseTheme = {
  color: ColorTheme
}

const lightTheme: BaseTheme = {
  color: baseLight,
}

const darkTheme: BaseTheme = {
  color: baseDark,
}

export const getTheme = (colorMode: ColorMode): BaseTheme => {
  switch (colorMode) {
    case 'light':
      return lightTheme
    case 'dark':
      return darkTheme
  }
}
