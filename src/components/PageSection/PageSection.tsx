import React from 'react'
import { Grid, styled } from '@material-ui/core'
import { GridProps } from '@material-ui/core/Grid'

export interface PageSectionProps extends GridProps {
  flex?: 1 | 0 | 'auto'
}

const StyledGrid = styled(({ flex, ...props }: PageSectionProps) => (
  <Grid {...props} />
))(
  {
    flex: ({ flex }) => flex,
    flexWrap: 'nowrap'
  },
  {
    name: 'PageSection'
  }
)

const PageSection: React.FC<PageSectionProps> = (props) => (
  <StyledGrid {...props} />
)

PageSection.defaultProps = {
  direction: 'column',
  item: true,
  container: true,
  spacing: 2
}

export { PageSection }
