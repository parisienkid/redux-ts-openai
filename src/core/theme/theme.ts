import { ITheme } from "../interfaces/styled"
import  {DefaultTheme } from 'styled-components';

export enum ThemeEnum  {
    light = "light",
    dark = "dark"
}

export const baseTheme: ITheme = {
    colors: {
        bg: '255, 255, 255',
    },

    media: {
        extraLarge: '(max-width: 1280px)',
        large: '(max-width: 1024px)',
        medium: '(max-width: 768px)',
        small: '(max-width: 540px)',
    },

    // in px
    sizes: {
        default: {
            header: { height: 50 },
            container: { width: 93 },
            footer: { height: 128 },
            modal: { width: 540 },
        },
        xl: {
            header: { height: 50 },
            container: { width: 93 },
            footer: { height: 128 },
            modal: { width: 540 },
        },
        l: {
            header: { height: 50 },
            container: { width: 93 },
            footer: { height: 128 },
            modal: { width: 540 },
        },
        m: {
            header: { height: 50 },
            container: { width: 93 },
            footer: { height: 128 },
            modal: { width: 540 },
        },
        s: {
            header: { height: 50 },
            container: { width: 93 },
            footer: { height: 128 },
            modal: { width: 540 },
        }
    },

    // in ms
    durations: {
        ms300: 300,
    },

    // z-index
    order: {
        header: 50,
        modal: 100,
    },
}

export const lightTheme: DefaultTheme = {
    ...baseTheme,
    type: ThemeEnum.light,
  
    colors: {
      ...baseTheme.colors,
      bg: '#E5E4E8',
    },
}

export const darkTheme: DefaultTheme = {
    ...baseTheme,
    type: ThemeEnum.dark,
  
    colors: {
      ...baseTheme.colors,
      bg: '#19191B',
    },
  }