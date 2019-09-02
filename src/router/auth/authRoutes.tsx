import React from 'react'
import { makeRouteConfig, Route } from 'found'
import { graphql } from 'babel-plugin-relay/macro'
import publicRoutes from '../public/publicRoutes'
import Layout from 'layout'
import { Dashboard } from 'views'
import { unsetLoggedUser } from 'utils/auth'

const routes = makeRouteConfig(
  <Route
    path='/'
    Component={Layout}
    query={graphql`
      query authRoutes_LayoutQuery {
        me {
          id
          ...Layout_me
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
    }}>
    <Route Component={Dashboard} />
  </Route>
)

export default routes
