import React, { useContext } from 'react'
import MenuContext from '../../../../../context/menuContext'
import { IMenuItem } from '../../../../../typings/MegaMenu'
import { OpenParentLink } from './OpenParentLink'
import { OpenChildrenLink } from './OpenChildrenLink'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = [
  'drawer_header',
  'drawer_title',
  'drawer_back',
  'drawer_back--title',
  'drawer_list',
  'drawer_list--item'
]


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

  const { handles } = useCssHandles(CSS_HANDLES)

  return (
    <>
      {
        (breadcrumb.length > 1)
        &&
        <div className={`${handles['drawer_header']}`}>
          <span className={`${handles['drawer_title']}`}>
            {breadcrumb[breadcrumb.length - 1].replace(/\d/g, '')}
          </span>
          <button
            className={`${handles['drawer_back']}  bn bg-transparent pa0 ma0 lh-solid pointer`}
            onClick={handleBack}
          >
            Volver
          </button>
        </div>

      }
      {
        currentMenu &&
        <ul className={`${handles['drawer_list']} w-100 pa6 ma0`}>
          {
            currentMenu.map((menu: IMenuItem) => (
              <li className={`${handles['drawer_list--item']}`} key={menu.id}>
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
