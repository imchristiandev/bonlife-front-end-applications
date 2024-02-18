import React from 'react'
// @ts-ignore
import { Icon } from 'vtex.store-icons'
import { IMenuItem } from '../../../../../typings/MegaMenu'

interface IOpenParentLink {
  menu: IMenuItem
  updateChildrenMenu: (menuId: string) => void
  handleNavigation: (slug: string) => void
}

export const OpenChildrenLink = ({
  menu,
  updateChildrenMenu,
  handleNavigation
}: IOpenParentLink) => {
  return (
    <button
      className='flex justify-between w-100 pa3'
      onClick = { () => {
        menu.hasChildren ?
        updateChildrenMenu( menu.id ) :
        handleNavigation( menu.slug )
      }}
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
  )
}
