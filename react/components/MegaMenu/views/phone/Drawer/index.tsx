import React, { useContext } from 'react'
import MenuContext from '../../../../../context/menuContext'
import { IMenuItem } from '../../../../../typings/MegaMenu'
import { OpenParentLink } from './OpenParentLink'
import { OpenChildrenLink } from './OpenChildrenLink'

export const DrawerMenu = ({
  handleBack,
  updateChildrenMenu,
  handleNavigation
}: any) => {
  const {
    currentMenu,
    mobileMenuItemsBehavior,
    breadcrumb
  } = useContext(MenuContext)

  return (
    <>
    {
      (breadcrumb.length > 1) &&
      <button onClick={handleBack}>
        Volver
      </button>
    }
    {
    currentMenu &&
      <ul className='w-100 pa6'>
        {
          currentMenu.map((menu: IMenuItem) => (
            <li key={menu.id}>
              {
                (mobileMenuItemsBehavior === 'openParentLink') ?
                <OpenParentLink
                  menu={menu}
                  updateChildrenMenu={updateChildrenMenu}
                  handleNavigation={handleNavigation}
                /> :
                <OpenChildrenLink
                  menu={menu}
                  updateChildrenMenu={updateChildrenMenu}
                  handleNavigation={handleNavigation}
                />
              }
            </li>
          ))
        }
      </ul>
    }
    </>
  )
}
