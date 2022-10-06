import 'styled-components'

import { ITheme, ThemeEnum } from './interface/styled'

declare module 'styled-components' {
    export interface DefaultTheme extends ITheme {
        type: ThemeEnum
    }
}