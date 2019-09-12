import {
  ConnectionHandler,
  Environment,
  RecordSource,
  Store
} from 'relay-runtime'
import {
  RelayNetworkLayer,
  urlMiddleware,
  authMiddleware
} from 'react-relay-network-modern/lib'
import { getAuthToken } from 'utils/auth'

const network = new RelayNetworkLayer(
  [
    urlMiddleware({
      url: '/graphql'
    }),
    authMiddleware({
      header: 'Authorization',
      prefix: 'Bearer ',
      token: getAuthToken
    })
  ],
  { noThrow: true }
)

const handlerProvider = (handle: string) => {
  switch (handle) {
    case 'connection':
      return ConnectionHandler
    default:
      throw new Error(`Unknown handle ${handle}`)
  }
}

let environment = new Environment({
  network,
  store: new Store(new RecordSource()),
  handlerProvider
})

export const resetEnvironment = () => {
  environment = new Environment({
    network,
    store: new Store(new RecordSource()),
    handlerProvider
  })
}

export default environment
