import React from 'react'
import { render } from 'utils/test-utils'
import { PageSection, PageSectionProps } from './PageSection'

const renderPageSection = (props: Partial<PageSectionProps> = {}) => {
  const defaultProps: PageSectionProps = {}

  return render(<PageSection {...defaultProps} {...props} />)
}

describe('<PageSection />', () => {
  it('renders without crashing', () => {
    renderPageSection()
  })
})
