import React from 'react'
import { render } from 'utils/test-utils'
import { Dashboard } from './Dashboard'

const renderDashboard = (props: object = {}) => {
  const defaultProps = {}

  return render(<Dashboard {...defaultProps} {...props} />)
}

describe('<Dashboard />', () => {
  it('renders without crashing', () => {
    renderDashboard()
  })
})
