interface ISizes {
  header: { height: number }
  container: { width: number }
  footer: { height: number }
  modal: { width: number }
}

export interface ITheme {
    colors: {
      bg: string
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