import { GraphQLTaggedNode, CacheConfig, Environment } from 'relay-runtime'
import { DataFrom } from 'react-relay'
import { BaseRouteConfig, Params, RouteMatch, RouteRenderArgs } from 'found'

declare module 'found-relay' {
  const Resolver: any
  export { Resolver }
}

declare module 'found' {
  export interface RouteRenderArgs {
    error?: Error
    environment?: Environment
    resolving?: boolean
    variables?: object
    retry?: () => void
  }

  export interface BaseRouteConfig {
    query?: GraphQLTaggedNode
    cacheConfig?: CacheConfig
    dataFrom?: DataFrom
    getQuery? (): GraphQLTaggedNode
    getCacheConfig? (): CacheConfig
    prepareVariables? (variables: Params, routeMatch: RouteMatch): object
  }
}
