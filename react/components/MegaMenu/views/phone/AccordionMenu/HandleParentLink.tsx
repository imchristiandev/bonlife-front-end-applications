import React from 'react'
// @ts-ignore
import { Icon } from 'vtex.store-icons'

interface IHandleParentLink {
  menu: any
  handleChildren: (event: any) => void
  handleNavigation: (slug: string) => void
}

export const HandleParentLink = ({
  menu,
  handleChildren,
  handleNavigation
}: IHandleParentLink) => {

  return (
    <div className='flex justify-between w-100 pa3'>
      <button onClick = { () => {
        handleNavigation( menu.slug )
      }}>
        <Icon id={ menu.icon } /> { menu.name }
      </button>
      {
      (menu.menu && menu.menu.length > 1) &&
      <button onClick={( event: any ) => handleChildren( event )}>
        <Icon id={ menu.icon } />
      </button>
      }
    </div>
  )
}
