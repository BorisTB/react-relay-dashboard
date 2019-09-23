import React from 'react'
import { render } from 'utils/test-utils'
import { createMockEnvironment } from 'relay-test-utils'
import { Login } from './Login'

const renderLogin = (props: object = {}) => {
  const defaultProps = {}
  const environment = createMockEnvironment()

  return render(<Login {...defaultProps} {...props} />, environment)
}

describe('<Login />', () => {
  it('renders without crashing', () => {
    renderLogin()
  })
})
