import { ITheme } from "../interfaces/styled"
import { DefaultTheme } from 'styled-components';

export enum ThemeEnum {
    main = "main",
    api = "api",
    dalle = "dalle",
    research = "research",
    blog = "blog",
    about = "about"
  }

export const baseTheme: ITheme = {
    colors: {
        constants: {
            silver: '0,0,0, 0.03'
        },
        bg: '255, 255, 255',
        header: '255, 255, 255',
        footer: '255, 255, 255',
        footerColor: '255, 255, 255',
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
            mainPage: { 
                col: '65fr 35fr',
                row: '1fr',
            },
        },
        xl: {
            header: { height: 50 },
            container: { width: 93 },
            footer: { height: 128 },
            mainPage: { 
                col: '60fr 40fr',
                row: '1fr',
            },
        },
        l: {
            header: { height: 50 },
            container: { width: 93 },
            footer: { height: 128 },
            mainPage: { 
                col: '55fr 45fr',
                row: '1fr',
            },
        },
        m: {
            header: { height: 50 },
            container: { width: 93 },
            footer: { height: 128 },
            mainPage: { 
                col: '1fr',
                row: '50fr 50fr',
            },
        },
        s: {
            header: { height: 50 },
            container: { width: 93 },
            footer: { height: 128 },
            mainPage: { 
                col: '1fr',
                row: '50fr 50fr',
            },
        },
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

export const mainTheme: DefaultTheme = {
    ...baseTheme,
    type: ThemeEnum.main,

    colors: {
        ...baseTheme.colors,
        bg: '0, 0, 0',
        header: '255, 255, 255',
        footer: '0, 0, 0'
    },
}

export const apiTheme: DefaultTheme = {
    ...baseTheme,
    type: ThemeEnum.api,

    colors: {
        ...baseTheme.colors,
        bg: '247, 247, 248',
        header: '255, 255, 255',
        footer: '247, 247, 248',
        footerColor: '0, 0, 0',
    },
}

export const dalleTheme: DefaultTheme = {
    ...baseTheme,
    type: ThemeEnum.dalle,

    colors: {
        ...baseTheme.colors,
        bg: '0, 0, 0',
        header: '0, 0, 0',
        footer: '0, 0, 0'
    },
}

export const researchTheme: DefaultTheme = {
    ...baseTheme,
    type: ThemeEnum.dalle,

    colors: {
        ...baseTheme.colors,
        bg: '246, 246, 244',
        header: '246, 246, 244',
        footer: '246, 246, 244',
        footerColor: '0, 0, 0'
    },
}

export const blogTheme: DefaultTheme = {
    ...baseTheme,
    type: ThemeEnum.blog,

    colors: {
        ...baseTheme.colors,
        footerColor: '0, 0, 0',
    },
}

export const aboutTheme: DefaultTheme = {
    ...baseTheme,
    type: ThemeEnum.about,

    colors: {
        ...baseTheme.colors,
        footerColor: '0, 0, 0'
    },
}
