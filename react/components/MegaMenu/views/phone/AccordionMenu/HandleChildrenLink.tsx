import React from 'react'
// @ts-ignore
import { Icon } from 'vtex.store-icons'

interface IHandleChildrenLink {
  menu: any
  handleChildren: (event: any) => void
  handleNavigation: (slug: string) => void
}

export const HandleChildrenLink = ({
  menu,
  handleChildren,
  handleNavigation
}: IHandleChildrenLink) => {
  return (
    <button
      className={`flex justify-between w-100 pa3 bn bg-transparent pa0 ma0 lh-solid pointer`}
      onClick = { (event: any) => {
        (menu.menu && menu.menu.length > 1) ?
        handleChildren(event) :
        handleNavigation( menu.slug )
      }}
    >
      <div>
        <Icon id={ menu.icon } /> { menu.name }
      </div>
      {
      (menu.menu && menu.menu.length > 1) &&
      <div>
        <Icon id={ menu.icon } />
      </div>
      }
    </button>
  )
}
