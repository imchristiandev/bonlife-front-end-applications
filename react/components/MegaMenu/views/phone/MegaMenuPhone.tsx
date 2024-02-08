import React, { useEffect, useState } from 'react'
import MenuContext from '../../../../context/menuContext'

// @ts-ignore
import { Icon } from 'vtex.store-icons'
import { useRuntime } from 'vtex.render-runtime'

import { IMenuItem } from '../../../../typings/MegaMenu'
import { useQuery } from 'react-apollo'
import GET_MENU from '../../../../graphql/getMenu.graphql'
import { updateCurrentMenu } from '../../../../utils/updateCurrentMenu'

export const MegaMenuPhone = () => {
  const { currentMenu, mobileMenuItemsBehavior, setCurrentMenu } = React.useContext(MenuContext)
  console.log("🚀 ~ MegaMenuPhone ~ mobileMenuItemsBehavior:", mobileMenuItemsBehavior)
  const [menuId, setMenuId] = useState('')
  const { navigate } = useRuntime()

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
                <div className='flex justify-between'>
                  <button onClick = { () => {handleNavigation( menu.slug )} } >
                    <Icon id={ menu.icon } /> { menu.name }
                  </button>
                  {
                  menu.hasChildren &&
                  <button onClick={() => updateChildrenMenu( menu.id )}>
                    <Icon id={ menu.icon } />
                  </button>
                  }
                </div> :
                <button
                  className='flex justify-between'
                  onClick = { () => {updateChildrenMenu( menu.id )} }
                >
                  <div>
                    <Icon id={ menu.icon } /> { menu.name }
                  </div>
                  {
                  menu.hasChildren &&
                  <div>
                    <Icon id={ menu.icon } />
                  </div>
                  }
                </button>
              }
            </li>
          ))
        }
      </ul>:
      null
  )
}
