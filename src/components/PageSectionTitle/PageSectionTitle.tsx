import React from 'react'
import { Grid, Typography } from '@material-ui/core'

export interface PageSectionTitleProps {
  children?: React.ReactNode
}

const PageSectionTitle: React.FC<PageSectionTitleProps> = ({ children }) => (
  <Grid item>
    <Typography variant='h6'>{children}</Typography>
  </Grid>
)

export { PageSectionTitle }
