import React, { useState } from 'react'
import { Card, CardContent, Grid, TextField } from '@material-ui/core'

const DashboardItem: React.FC = () => {
  const [elevation, setElevation] = useState(3)

  return (
    <Grid item xs={12} sm={6} md>
      <Card elevation={elevation}>
        <CardContent>
          <TextField
            type='number'
            value={elevation}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setElevation(parseInt(e.target.value, 10))
            }
          />
        </CardContent>
      </Card>
    </Grid>
  )
}

export default DashboardItem
