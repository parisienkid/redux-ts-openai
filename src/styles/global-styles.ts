import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

body, html {
    height: 100%;
    width: 100%;
    font-family: "TS", sans-serif;
    background-color: #000;
}

#root {
    height: 100%;
    width: 100%;
}

.App {
    position: relative;
    min-height: 100vh;
}

`