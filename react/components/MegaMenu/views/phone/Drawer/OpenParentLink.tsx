import React from 'react'
// @ts-ignore
import { Icon } from 'vtex.store-icons'
import { IMenuItem } from '../../../../../typings/MegaMenu'

interface IOpenParentLink {
  menu: IMenuItem
  updateChildrenMenu: (menuId: string, menuName: string) => void
  handleNavigation: (slug: string) => void
}

export const OpenParentLink = ({
  menu,
  updateChildrenMenu,
  handleNavigation
}: IOpenParentLink) => {
  return (
    <div className='flex justify-between'>
      <button
        onClick = { () => {handleNavigation( menu.slug )} }
        className={`bn bg-transparent pa0 ma0 lh-solid pointer`}
      >
        <Icon id={ menu.icon } /> { menu.name }
      </button>
      {
      menu.hasChildren &&
      <button
        onClick={() => updateChildrenMenu( menu.id, menu.name )}
        className={`bn bg-transparent pa0 ma0 lh-solid pointer`}
      >
        <Icon id={ menu.icon } />
      </button>
      }
    </div>
  )
}
