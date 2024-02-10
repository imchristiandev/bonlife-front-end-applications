import React, { useEffect, useState } from 'react'
import MenuContext from '../../../../context/menuContext'

// @ts-ignore
import { Icon } from 'vtex.store-icons'


import { IMenuItem } from '../../../../typings/MegaMenu'
import { useQuery } from 'react-apollo'
import GET_MENU from '../../../../graphql/getMenu.graphql'
import { updateCurrentMenu } from '../../../../utils/updateCurrentMenu'
import { OpenParentLink } from './OpenParentLink'
import { useRuntime } from 'vtex.render-runtime'
import { OpenChildrenLink } from './OpenChildrenLink'

export const MegaMenuPhone = () => {
  const { currentMenu, mobileMenuItemsBehavior, setCurrentMenu } = React.useContext(MenuContext)
  const [menuId, setMenuId] = useState('')


  const { data } = useQuery(GET_MENU, { variables: { menuId } });
  const { navigate } = useRuntime()

  useEffect(() => {
    const newMenu = data?.menu?.menu
    if (newMenu) {
      setCurrentMenu(updateCurrentMenu(newMenu))
    }
  }, [data])

  const updateChildrenMenu = (menuId: string) => {
    setMenuId( menuId );
  }

  const handleNavigation = (slug: string) => {
    const newSlug = slug.startsWith('/') ? slug : `/${slug}`
    navigate({
      to: `${newSlug}/`,
    })
  }

  return (
    currentMenu ?
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
      </ul>:
      null
  )
}
