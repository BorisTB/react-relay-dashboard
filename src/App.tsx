import React from 'react'
import { RelayEnvironmentProvider } from 'relay-hooks/lib'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import { Resolver } from 'found-relay'
import { muiThemeLight } from 'theme'
import Router from 'router'
import environment from 'environment'

const App: React.FC = () => (
  <RelayEnvironmentProvider environment={environment}>
    <MuiThemeProvider theme={muiThemeLight}>
      <CssBaseline />
      <Router resolver={new Resolver(environment)} />
    </MuiThemeProvider>
  </RelayEnvironmentProvider>
)

export default App
