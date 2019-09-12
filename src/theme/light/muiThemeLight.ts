import { createMuiTheme } from '@material-ui/core'
import lightBlue from '@material-ui/core/colors/lightBlue'

const muiThemeLight = createMuiTheme({
  mixins: {
    toolbar: {
      minHeight: 60
    }
  },
  palette: {
    primary: lightBlue
  },
  props: {
    MuiCard: {
      elevation: 3
    }
  },
  shape: {
    borderRadius: 16
  },
  typography: {
    h6: {
      fontSize: '1rem'
    }
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

export { muiThemeLight }