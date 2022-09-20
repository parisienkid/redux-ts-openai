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

h1 {
    font-size: 2.5rem;
    font-weight: 400;
    line-height: 1.1;
}

h2 {
    font-size: 1.9rem;
    font-weight: 400;
    line-height: 1.15;
}

h3 {
    font-size: 1.55rem;
    font-weight: 400;
    line-height: 1.15;
}

h4 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.2;
}


p {
    font-size: 0.83rem;
    font-weight: 400;
    line-height: 1.3;
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