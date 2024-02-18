import React from 'react'
// @ts-ignore
import { Icon } from 'vtex.store-icons'
import { IMenuItem } from '../../../../../typings/MegaMenu'

interface IOpenParentLink {
  menu: IMenuItem
  updateChildrenMenu: (menuId: string) => void
  handleNavigation: (slug: string) => void
}

export const OpenParentLink = ({
  menu,
  updateChildrenMenu,
  handleNavigation
}: IOpenParentLink) => {
  return (
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
    </div>
  )
}
