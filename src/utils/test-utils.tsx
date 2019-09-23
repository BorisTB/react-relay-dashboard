import React from 'react'
import { createMockEnvironment } from 'relay-test-utils'
import { render, RenderOptions } from '@testing-library/react'
import { AppProviders } from 'App'
import { Environment } from 'relay-runtime'

const renderWithEnvironment = (
  ui: React.ReactElement,
  environment: Environment = createMockEnvironment(),
  options?: Omit<RenderOptions, 'queries'>
) =>
  render(ui, {
    wrapper: (props) => <AppProviders environment={environment} {...props} />,
    ...options
  })

export { renderWithEnvironment as render }
