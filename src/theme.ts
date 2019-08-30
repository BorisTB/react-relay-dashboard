import { createMuiTheme } from '@material-ui/core'
import untypedStyled, { CreateStyled } from '@emotion/styled'
import { Theme } from '@material-ui/core/styles'

const theme = createMuiTheme({})

export const styled = untypedStyled as CreateStyled<Theme>

export default theme
