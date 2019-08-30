import React from 'react'
import { createFragmentContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import Public from './Public'
import { Layout_me } from './__generated__/Layout_me.graphql'

interface Props {
  chidren?: React.ReactNode,
  me: Layout_me
}

const Layout: React.FC<Props> = ({ children }) => (
  <Public>
    {children}
  </Public>
)

export default createFragmentContainer(Layout, {
  me: graphql`
    fragment Layout_me on User {
      id
    }
  `
})
