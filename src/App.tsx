import React from 'react'
import { RelayEnvironmentProvider } from 'relay-hooks/lib'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import { Resolver } from 'found-relay'
import { Environment } from 'relay-runtime'
import { muiThemeLight } from 'theme'
import Router from 'router'
import relayEnvironment from 'environment'

export interface AppProvidersProps {
  environment: Environment
  children?: React.ReactNode
}

const AppProviders: React.FC<AppProvidersProps> = ({
  children,
  environment
}) => (
  <RelayEnvironmentProvider environment={environment}>
    <MuiThemeProvider theme={muiThemeLight}>{children}</MuiThemeProvider>
  </RelayEnvironmentProvider>
)

const App: React.FC = () => (
  <AppProviders environment={relayEnvironment}>
    <CssBaseline />
    <Router resolver={new Resolver(relayEnvironment)} />
  </AppProviders>
)

export { App, AppProviders }
