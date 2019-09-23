import React from 'react'
import { render } from 'utils/test-utils'
import { PageSectionTitle, PageSectionTitleProps } from './PageSectionTitle'

const renderPageSectionTitle = (props: Partial<PageSectionTitleProps> = {}) => {
  const defaultProps: PageSectionTitleProps = {}

  return render(<PageSectionTitle {...defaultProps} {...props} />)
}

describe('<PageSectionTitle />', () => {
  it('renders without crashing', () => {
    renderPageSectionTitle()
  })
})
