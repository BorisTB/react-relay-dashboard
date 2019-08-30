import React from 'react'
import { makeRouteConfig, Route } from 'found'
import { graphql } from 'babel-plugin-relay/macro'
import Layout from 'layout'
import { Login } from 'views'

const routes = makeRouteConfig(
  <Route
    path='/'
    Component={Layout}
    query={graphql`
      query routes_LayoutQuery {
        me {
          ...Layout_me
        }
      }
    `}>
    <Route Component={Login} />
  </Route>
)

export default routes
