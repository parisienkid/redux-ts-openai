import { createGlobalStyle } from 'styled-components'

interface IGlobalStyle {
    background: string;
}

export default createGlobalStyle<IGlobalStyle>`

body, html {
    height: 100%;
    width: 100%;
    font-family: Charter,Georgia,serif;
    background-color: rgb(${props => props.background});
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 20px;
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