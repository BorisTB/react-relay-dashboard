import React from 'react'
import { makeRouteConfig, Route } from 'found'
import { graphql } from 'babel-plugin-relay/macro'
import authRoutes from '../auth/authRoutes'
import Layout from 'layout'
import { Login } from 'views'

const routes = makeRouteConfig(
  <Route
    path='/'
    Component={Layout}
    query={graphql`
      query publicRoutes_LayoutQuery {
        me {
          id
          ...Layout_me
        }
      }
    `}
    render={({ Component, props, match }) => {
      if (Component && props) {
        // @ts-ignore
        if (props.me && props.me.id) {
          match.router.replaceRouteConfig(authRoutes)
        }

        return <Component {...props} />
      }
    }}>
    <Route Component={Login} />
  </Route>
)

export default routes
