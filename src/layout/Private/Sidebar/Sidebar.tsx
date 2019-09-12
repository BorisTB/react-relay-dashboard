import React from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  styled
} from '@material-ui/core'
import { fade } from '@material-ui/core/styles'
import { Link } from 'found'
import { menuItems } from './menuItems'

const DrawerStyled = styled(Drawer)(({ theme }) => ({
  flexShrink: 0,
  whiteSpace: 'nowrap',
  overflowX: 'hidden',

  '&': {
    width: ({ open }) => (open ? '240px' : '40px'),
    transition: theme.transitions.create(['width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },

  '& .MuiDrawer-paper': {
    width: ({ open }) => (open ? 240 : 40),
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
    color: theme.palette.text.secondary,
    textDecoration: 'none',
    letterSpacing: '0.05rem',
    background: `linear-gradient(to right, ${fade(
      theme.palette.primary.main,
      0.1
    )}, ${fade(theme.palette.primary.main, 0.1)})`,
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: -250,
    transition: theme.transitions.create(['background'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.standard
    })
  },
  active: {
    color: theme.palette.primary.dark,
    fontWeight: 500,
    backgroundPositionX: 0,
    borderRight: `3px solid ${theme.palette.primary.main}`
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
          {menuItems.map(({ Icon, to, textPrimary }) => (
            <ListItem
              key={to}
              component={Link}
              to={to}
              exact
              className={classes.root}
              activeClassName={classes.active}
            >
              <ListItemIcon className={classes.icon}>
                <Icon fontSize='small' />
              </ListItemIcon>
              <ListItemText
                primary={textPrimary}
                primaryTypographyProps={{ variant: 'inherit' }}
              />
            </ListItem>
          ))}
        </List>
      </SidebarContent>
    </DrawerStyled>
  )
}

export { Sidebar }
