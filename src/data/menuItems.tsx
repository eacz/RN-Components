import MenuItem from "../interfaces/MenuItemInterface"

const menuItems : MenuItem[] = [
  {
    name: 'Animation 01',
    icon: 'cube-outline',
    component: 'Animation01Screen'
  },
  {
    name: 'Animation 02',
    icon: 'albums-outline',
    component: 'Animation02Screen'
  },
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen'
  },
  {
    name: 'Alert',
    icon: 'alert-circle-outline',
    component: 'AlertScreen'
  },
]

export default menuItems