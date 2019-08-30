import { BrowserProtocol, queryMiddleware } from 'farce'
import { createFarceRouter } from 'found'
import routeConfig from './routes'

const Router = createFarceRouter({
  historyMiddlewares: [queryMiddleware],
  historyProtocol: new BrowserProtocol(),
  routeConfig
})

export default Router
