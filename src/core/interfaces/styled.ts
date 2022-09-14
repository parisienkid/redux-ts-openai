interface ISizes {
  header: { height: number }
  container: { width: number }
  footer: { height: number }
  mainPage: { 
    col: string
    row: string
  },
}

export interface ITheme {
    colors: {
      constants: {
        silver: string
      }
      bg: string,
      header: string,
      footer: string,
      footerColor: string
    }
  
    media: {
      extraLarge: string
      large: string
      medium: string
      small: string
    }
  
    sizes: {
      default: ISizes,
      xl: ISizes,
      l: ISizes,
      m: ISizes,
      s: ISizes
    }
  
    durations: {
      ms300: number
    }
  
    order: {
      header: number
      modal: number
    },
  }