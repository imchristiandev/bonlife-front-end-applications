export const updateCurrentMenu = ( menus: any ) => {
  return menus.map((menu: any) => ({
    display: menu.display,
    hasChildren: menu.menu.length === 0 ? false : true,
    icon: menu.icon,
    id: menu.id,
    name: menu.name,
    order: menu.order,
    slug: menu.slug
  }))
}
