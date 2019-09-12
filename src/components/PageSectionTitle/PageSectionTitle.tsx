import React from 'react'
import { Grid, Typography } from '@material-ui/core'

const PageSectionTitle: React.FC = ({ children }) => (
  <Grid item>
    <Typography variant='h6'>{children}</Typography>
  </Grid>
)

export { PageSectionTitle }
