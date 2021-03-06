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
    icon: 'alert-outline',
    component: 'AlertScreen'
  },
  {
    name: 'TextInput',
    icon: 'text-outline',
    component: 'TextInputScreen'
  },
  {
    name: 'Pull to refresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen'
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'SectionListScreen'
  },
  {
    name: 'Modal',
    icon: 'copy-outline',
    component: 'ModalScreen'
  },
  {
    name: 'Infinite Scroll',
    icon: 'download-outline',
    component: 'InfiniteScrollScreen'
  },
  {
    name: 'SlideShow',
    icon: 'flower-outline',
    component: 'SlidesScreen'
  },
  {
    name: 'Themes',
    icon: 'flask-outline',
    component: 'ChangeThemeScreen'
  },
]

export default menuItems