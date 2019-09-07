import {
  Mutate,
  MutationConfig,
  MutationState
} from 'relay-hooks/lib/useMutation'
import { Environment } from 'relay-runtime'

export interface MutationHelper<T> {
  useMutation: (
    userConfig?: MutationConfig<T>,
    env?: Environment
  ) => [Mutate<T>, MutationState<T>]
}
