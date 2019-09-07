import { createMuiTheme } from '@material-ui/core'
import lightBlue from '@material-ui/core/colors/lightBlue'
import untypedStyled, { CreateStyled } from '@emotion/styled'
import { Theme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  mixins: {
    toolbar: {
      minHeight: 60
    }
  },
  palette: {
    primary: lightBlue
  }
})

export const styled = untypedStyled as CreateStyled<Theme>

export default theme
