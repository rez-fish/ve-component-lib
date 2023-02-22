import { createThemeContract, createGlobalTheme } from '@vanilla-extract/css'

const emptyTheme = {
  colors: {
    blurple: '#000',
    green: '#000',
    yellow: '#000',
    fuchsia: '#000',
    red: '#000',
    white: '#000',
    black: '#000',
  },
}

export const vars = createThemeContract(emptyTheme)

export const theme = createGlobalTheme(':root', vars, {
  colors: {
    blurple: '#5865F2',
    green: '#57F287',
    yellow: '#FEE75C',
    fuchsia: '#EB459E',
    red: '#ED4245',
    white: '#FFFFFF',
    black: '#000000',
  },
})
