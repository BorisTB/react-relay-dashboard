import React from 'react'
import { createFragmentContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { ProfileSettings_user } from './__generated__/ProfileSettings_user.graphql'

interface ProfileSettingsProps {
  user: ProfileSettings_user
}

const ProfileSettings: React.FC<ProfileSettingsProps> = ({ user }) => (
  <div>
    {user && user.name}
  </div>
)

export default createFragmentContainer(ProfileSettings, {
  user: graphql`
    fragment ProfileSettings_user on User {
      id
      name
      email
      role
    }
  `
})
