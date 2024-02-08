import React, { useEffect, useState } from 'react'
import MenuContext from '../../../../context/menuContext'

// @ts-ignore
import { Icon } from 'vtex.store-icons'

import { IMenuItem } from '../../../../typings/MegaMenu'
import { useQuery } from 'react-apollo'
import GET_MENU from '../../../../graphql/getMenu.graphql'
import { updateCurrentMenu } from '../../../../utils/updateCurrentMenu'

export const MegaMenuPhone = () => {
  const { currentMenu, mobileMenuItemsBehavior, setCurrentMenu } = React.useContext(MenuContext)
  const [menuId, setMenuId] = useState('')

  const { data } = useQuery(GET_MENU, { variables: { menuId } });

  useEffect(() => {
    const newMenu = data?.menu?.menu
    if (newMenu) {
      setCurrentMenu(updateCurrentMenu(newMenu))
    }
  }, [data])

  const updateChildrenMenu = (menuId: string) => {
    setMenuId( menuId );
  }

  return (
    currentMenu ?
      <ul>
        {
          currentMenu.map((menu: IMenuItem) => (
            <li key={menu.id}>
              {
                mobileMenuItemsBehavior === 'openParentLink' ?
                <button onClick={() => updateChildrenMenu( menu.id )}>
                  <Icon id={ menu.icon } /> { menu.name }
                </button> :
                <div>
                  <Icon id={ menu.icon } /> { menu.name }
                </div>
              }
              {
                menu.hasChildren ?
                <div>
                  <Icon id='nav-caret--right' />
                </div> :
                null
              }
            </li>
          ))
        }
      </ul>:
      null
  )
}
