import React from 'react'
import { Box, Container } from '@material-ui/core'

const Public: React.FC = ({ children }) => (
  <Container component='main' maxWidth='xs'>
    <Box display='flex' height='100vh' justifyContent='center'>
      <Box alignSelf='center' width={1}>
        {children}
      </Box>
    </Box>
  </Container>
)

export { Public }
