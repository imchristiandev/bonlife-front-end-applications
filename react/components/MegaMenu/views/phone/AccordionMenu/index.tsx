import React, { useContext } from 'react'
import MenuContext from '../../../../../context/menuContext'
import { HandleChildrenLink } from './HandleChildrenLink'
import { HandleParentLink } from './HandleParentLink'

export const AccordionMenu = ({handleNavigation}: any) => {
  const { accordionMenu, mobileMenuItemsBehavior } = useContext(MenuContext)

  const handleChildren = (event: any) => {
    const section = event.target.closest('li')
    section.querySelector('ul').classList.toggle('dn')
  }

  const buildMenu = (menu: any, depth: number = 1) => {
    return (
      <ul className={`${depth !== 1 ? 'dn pa0' : 'db pa6'} w-100`}>
        {
          menu.map((menu: any) => {
            return (
              <li key={menu.id}>
                {
                  mobileMenuItemsBehavior === 'openParentLink' ?
                  <HandleParentLink
                    menu={menu}
                    handleChildren={handleChildren}
                    handleNavigation={handleNavigation}
                  /> :
                  <HandleChildrenLink
                    menu={menu}
                    handleChildren={handleChildren}
                    handleNavigation={handleNavigation}
                  />
                }
                {
                  menu.menu && buildMenu(menu.menu, depth + 1)
                }
              </li>
            )
          })
        }
      </ul>
    )
}

  return (
    accordionMenu &&
    buildMenu(accordionMenu)
  )
}