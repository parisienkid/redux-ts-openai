import { createGlobalStyle } from 'styled-components'
import { baseTheme } from '../core/theme/theme'

export default createGlobalStyle`

body, html {
    height: 100%;
    width: 100%;
    font-family: Charter,Georgia,serif;
    background-color: rgb(${baseTheme.colors.bg});
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#root {
    height: 100%;
    width: 100%;
}

.App {
    position: relative;
    min-height: 100vh;
}

a {
    color: white;
    &:hover {
        color: white;
        cursor: pointer;
        text-decoration: none;
    }
}

`