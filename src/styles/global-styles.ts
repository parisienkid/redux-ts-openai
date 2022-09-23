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
    @media ${({theme}) => theme.media.extraLarge} {
        font-size: 2.2rem;
    }
    @media ${({theme}) => theme.media.large} {
        font-size: 2rem;
    }
    @media ${({theme}) => theme.media.medium} {
        font-size: 1.8rem;
    }
    @media ${({theme}) => theme.media.small} {
        font-size: 1.5rem;
    }
}

h2 {
    font-size: 1.9rem;
    font-weight: 400;
    line-height: 1.15;
    @media ${({theme}) => theme.media.extraLarge} {
        font-size: 1.65rem;
    }
    @media ${({theme}) => theme.media.large} {
        font-size: 1.5rem;
    }
    @media ${({theme}) => theme.media.medium} {
        font-size: 1.35rem;
    }
    @media ${({theme}) => theme.media.small} {
        font-size: 1.25rem;
    }
    @media ${({theme}) => theme.media.small} {
        font-size: 1.15rem;
    }
}

h3 {
    font-size: 1.55rem;
    font-weight: 400;
    line-height: 1.15;
    @media ${({theme}) => theme.media.extraLarge} {
        font-size: 1.42rem;
    }
    @media ${({theme}) => theme.media.large} {
        font-size: 1.3rem;
    }
    @media ${({theme}) => theme.media.medium} {
        font-size: 1.15rem;
    }
    @media ${({theme}) => theme.media.small} {
        font-size: 1.07rem;
    }
}

h4 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.2;
    @media ${({theme}) => theme.media.extraLarge} {
        font-size: .95rem;
    }
    @media ${({theme}) => theme.media.large} {
        font-size: .9rem;
    }
    @media ${({theme}) => theme.media.medium} {
        font-size: .85rem;
    }
    @media ${({theme}) => theme.media.small} {
        font-size: .78rem;
    }
}


p {
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.3;
    @media ${({theme}) => theme.media.extraLarge} {
        font-size: .87rem;
    }
    @media ${({theme}) => theme.media.large} {
        font-size: .85rem;
    }
    @media ${({theme}) => theme.media.medium} {
        font-size: .75rem;
    }
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