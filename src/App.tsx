import React from 'react'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import { ThemeProvider } from 'emotion-theming'
import { Resolver } from 'found-relay'
import theme from './theme'
import Router from 'router'
import environment from 'environment'

const App: React.FC = () => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router resolver={new Resolver(environment)} />
    </ThemeProvider>
  </MuiThemeProvider>
)

export default App
