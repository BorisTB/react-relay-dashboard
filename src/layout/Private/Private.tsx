import React from 'react'
import { Box, styled } from '@material-ui/core'
import createPersistedState from 'use-persisted-state'
import Header from './Header'
import { Sidebar } from './Sidebar'
import { Router } from 'found'

const useSidebarState = createPersistedState('sidebar')

const Main = styled('main')(({ theme }) => ({
  display: 'flex',
  flex: 1,
  marginTop: theme.mixins.toolbar.minHeight,
  padding: theme.spacing(2),
  overflow: 'auto'
}))

interface PrivateProps {
  children?: React.ReactNode
  router: Router
}

const Private: React.FC<PrivateProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useSidebarState(true)
  const toggleSidebar = () => setSidebarOpen((op) => !op)

  return (
    <Box display='flex' width='100vw' height='100vh' overflow='hidden'>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar open={sidebarOpen} />
      <Box display='flex' flexGrow={1} height={1}>
        <Main>{children}</Main>
      </Box>
    </Box>
  )
}

export { Private }
