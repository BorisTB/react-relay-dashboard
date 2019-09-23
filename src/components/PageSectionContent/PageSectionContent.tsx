import React from 'react'
import { Grid, styled } from '@material-ui/core'
import { GridProps } from '@material-ui/core/Grid'

export interface PageSectionContentProps extends GridProps {
  flex?: 1 | 0 | 'auto'
}

const StyledGrid = styled(({ flex, ...props }: PageSectionContentProps) => (
  <Grid {...props} />
))(
  {
    flex: ({ flex }) => flex
  },
  {
    name: 'PageSectionContent'
  }
)

const PageSectionContent: React.FC<PageSectionContentProps> = (props) => (
  <StyledGrid {...props} />
)

PageSectionContent.defaultProps = {
  item: true,
  container: true,
  flex: 'auto'
}

export { PageSectionContent }
