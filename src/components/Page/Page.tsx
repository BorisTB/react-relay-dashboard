import React from 'react'
import { Grid } from '@material-ui/core'

const Page: React.FC = (props) => (
  <Grid direction='column' container spacing={3} {...props} />
)

export { Page }
