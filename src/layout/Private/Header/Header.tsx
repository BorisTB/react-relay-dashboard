import React from 'react'
import { AppBar, Toolbar, styled } from '@material-ui/core'

export interface HeaderProps {
  toggleSidebar?: () => void
}

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1
}))

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => (
  <AppBarStyled position='fixed' color='default' elevation={0}>
    <Toolbar onClick={toggleSidebar}>test</Toolbar>
  </AppBarStyled>
)

export default Header
