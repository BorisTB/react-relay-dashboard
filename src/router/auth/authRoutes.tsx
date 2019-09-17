import React from 'react'
import { makeRouteConfig, Route } from 'found'
import { graphql } from 'babel-plugin-relay/macro'
import publicRoutes from '../public/publicRoutes'
import { Private } from 'layout'
import { Dashboard, ProfileSettingsFragmentContainer } from 'views'
import { unsetLoggedUser } from 'utils/auth'

const routes = makeRouteConfig(
  <Route
    path='/'
    Component={Private}
    query={graphql`
      query authRoutes_LayoutQuery {
        me {
          id
        }
      }
    `}
    render={({ Component, props, match }) => {
      if (Component && props) {
        // @ts-ignore
        if (props.me === null) {
          unsetLoggedUser()
          match.router.replaceRouteConfig(publicRoutes)
        }

        return <Component {...props} />
      }
    }}
  >
    <Route Component={Dashboard} />
    <Route path='settings'>
      <Route
        path='profile'
        Component={ProfileSettingsFragmentContainer}
        query={graphql`
          query authRoutes_ProfileSettingsQuery {
            user: me {
              ...ProfileSettings_user
            }
          }
        `}
      />
    </Route>
  </Route>
)

export default routes
