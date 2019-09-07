import React from 'react'
import { RelayEnvironmentProvider } from 'relay-hooks/lib'
import { CssBaseline, MuiThemeProvider, withStyles } from '@material-ui/core'
import { ThemeProvider } from 'emotion-theming'
import { Resolver } from 'found-relay'
import theme from './theme'
import Router from 'router'
import environment from 'environment'

const styles = () => ({
  '@global': {
    html: {
      overflow: 'hidden'
    }
  }
})

const App: React.FC = () => (
  <RelayEnvironmentProvider environment={environment}>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router resolver={new Resolver(environment)} />
      </ThemeProvider>
    </MuiThemeProvider>
  </RelayEnvironmentProvider>
)

export default withStyles(styles)(App)
