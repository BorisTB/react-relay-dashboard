import React from 'react'
import { render } from 'utils/test-utils'
import {
  PageSectionContent,
  PageSectionContentProps
} from './PageSectionContent'

const renderPageSectionContent = (
  props: Partial<PageSectionContentProps> = {}
) => {
  const defaultProps: PageSectionContentProps = {}

  return render(<PageSectionContent {...defaultProps} {...props} />)
}

describe('<PageSectionContent />', () => {
  it('renders without crashing', () => {
    renderPageSectionContent()
  })
})
