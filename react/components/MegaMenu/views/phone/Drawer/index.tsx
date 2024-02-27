import React, { useContext } from 'react'
import MenuContext from '../../../../../context/menuContext'
import { IMenuItem } from '../../../../../typings/MegaMenu'
import { OpenParentLink } from './OpenParentLink'
import { OpenChildrenLink } from './OpenChildrenLink'

import styles from '../../../styles.css'

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
      <button
        className={`bn bg-transparent pa0 ma0 lh-solid pointer`}
        onClick={handleBack}
      >
        Volver
      </button>
    }
    {
    currentMenu &&
      <ul className={`${styles['list']} w-100 pa6 ma0`}>
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
