import { createMuiTheme } from '@material-ui/core'
import lightBlue from '@material-ui/core/colors/lightBlue'
import untypedStyled from '@emotion/styled'

const theme = createMuiTheme({
  mixins: {
    toolbar: {
      minHeight: 60
    }
  },
  palette: {
    primary: lightBlue
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          overflow: 'hidden'
        }
      }
    }
  }
})

export const styled = untypedStyled

export default theme
