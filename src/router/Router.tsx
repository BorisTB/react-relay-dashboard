import { BrowserProtocol, queryMiddleware } from 'farce'
import { createFarceRouter } from 'found'
import authRoutes from './auth/authRoutes'
import publicRoutes from './public/publicRoutes'
import { mightBeLoggedIn } from 'utils/auth'

const Router = createFarceRouter({
  historyMiddlewares: [queryMiddleware],
  historyProtocol: new BrowserProtocol(),
  routeConfig: mightBeLoggedIn() ? authRoutes : publicRoutes
})

export default Router
