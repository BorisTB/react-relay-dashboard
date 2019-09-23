import React from 'react'
import { Grid } from '@material-ui/core'
import { GridProps } from '@material-ui/core/Grid'

const Page: React.FC<GridProps> = (props) => <Grid {...props} />

Page.defaultProps = {
  direction: 'column',
  container: true,
  spacing: 3
}

export { Page }
