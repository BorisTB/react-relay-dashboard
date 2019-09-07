import React from 'react'
import {
  Drawer,
  List,
  ListItem, ListItemIcon,
  ListItemText,
  makeStyles,
  styled
} from '@material-ui/core'
import { Link } from 'found'
import { menuItems } from './menuItems'

const DrawerStyled = styled(Drawer)(({ theme }) => ({
  flexShrink: 0,
  whiteSpace: 'nowrap',
  overflowX: 'hidden',

  '&': {
    width: ({ open }) => open ? '240px' : '40px',
    transition: theme.transitions.create(['width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },

  '& .MuiDrawer-paper': {
    width: ({ open }) => open ? 240 : 40,
    overflowX: 'hidden',
    transition: theme.transitions.create(['width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  }
}))

const SidebarContent = styled('div')(({ theme }) => ({
  flex: 1,
  marginTop: theme.mixins.toolbar.minHeight
}))

const useStyles = makeStyles((theme) => ({
  root: {
  },
  active: {
    color: theme.palette.primary.main
  },
  icon: {
    color: 'inherit'
  }
}))

interface SidebarProps {
  open?: boolean
}

const Sidebar: React.FC<SidebarProps> = ({ open }) => {
  const classes = useStyles()

  return (
    <DrawerStyled variant='permanent' open={open}>
      <SidebarContent>
        <List component='nav'>
          {
            menuItems.map(({ Icon, to, textPrimary }) => (
              <ListItem
                key={to} button component={Link} to={to} exact className={classes.root} activeClassName={classes.active}>
                <ListItemIcon className={classes.icon}><Icon /></ListItemIcon>
                <ListItemText primary={textPrimary} />
              </ListItem>
            ))
          }
        </List>
      </SidebarContent>
    </DrawerStyled>
  )
}

export { Sidebar }
