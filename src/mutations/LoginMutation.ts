import { useMutation } from 'relay-hooks/lib'
import { MutationConfig } from 'relay-hooks/lib/useMutation'
import { graphql } from 'babel-plugin-relay/macro'
import { MutationHelper } from 'types'
import { LoginMutation as MutationType } from './__generated__/LoginMutation.graphql'
import { setAuthToken } from 'utils/auth'

export * from './__generated__/LoginMutation.graphql'

const LOGIN_MUTATION = graphql`
  mutation LoginMutation($data: LoginInput!) {
    login(data: $data) {
      token
      user {
        id
      }
    }
  }
`

const defaultConfig: MutationConfig<MutationType> = {
  updater: (store) => {
    const root = store.getRoot()
    const payload = store.getRootField('login')

    if (root && payload) {
      const token = payload.getValue('token')

      if (typeof token === 'string') {
        setAuthToken(token)
      }

      const user = payload.getLinkedRecord('user')

      if (user) {
        const me = root.getLinkedRecord('me')

        if (!me) {
          root.setLinkedRecord(user, 'me')
        } else {
          me.copyFieldsFrom(user)
        }
      }
    }
  }
}

const LoginMutation: MutationHelper<MutationType> = {
  useMutation: (userConfig = defaultConfig, env) =>
    useMutation<MutationType>(LOGIN_MUTATION, userConfig, env)
}

export { LOGIN_MUTATION, LoginMutation }
