import React from 'react'
import { render } from 'utils/test-utils'
import { GridProps } from '@material-ui/core/Grid'
import { Page } from './Page'

const renderPage = (props: Partial<GridProps> = {}) => {
  const defaultProps: GridProps = {}

  return render(<Page {...defaultProps} {...props} />)
}

describe('<Page />', () => {
  it('renders without crashing', () => {
    renderPage()
  })
})
