import React from 'react'
import { Grid, styled } from '@material-ui/core'
import { GridProps } from '@material-ui/core/Grid'

interface PageSectionProps {
  flex?: 1 | 0 | 'auto'
}

const StyledGrid = styled(
  ({
    flex,
    ...props
  }: PageSectionProps & Omit<GridProps, keyof PageSectionProps>) => (
    <Grid {...props} />
  )
)({
  flex: ({ flex }) => flex,
  flexWrap: 'nowrap'
}, {
  name: 'PageSection'
})

const PageSection: React.FC<PageSectionProps & GridProps> = (props) => (
  <StyledGrid direction='column' item container spacing={2} {...props} />
)

export { PageSection }
