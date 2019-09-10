import { DashboardOutlined, SettingsOutlined } from '@material-ui/icons'

const menuItems = [
  {
    to: '/',
    textPrimary: 'Dashboard',
    Icon: DashboardOutlined
  },
  {
    to: '/settings/profile',
    textPrimary: 'Profile Settings',
    Icon: SettingsOutlined
  }
]

export { menuItems }
