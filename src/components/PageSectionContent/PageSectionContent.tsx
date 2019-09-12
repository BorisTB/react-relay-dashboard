import React from 'react'
import { Grid, styled } from '@material-ui/core'
import { GridProps } from '@material-ui/core/Grid'

interface PageSectionContentProps {
  flex?: 1 | 0 | 'auto'
}

const StyledGrid = styled(
  ({
    flex,
    ...props
  }: PageSectionContentProps &
    Omit<GridProps, keyof PageSectionContentProps>) => <Grid {...props} />
)(
  {
    flex: ({ flex }) => flex
  },
  {
    name: 'PageSectionContent'
  }
)

const PageSectionContent: React.FC<
  PageSectionContentProps & GridProps
> = (props) => <StyledGrid item container {...props} />

PageSectionContent.defaultProps = {
  flex: 'auto'
}

export { PageSectionContent }
